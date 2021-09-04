import React, { Component } from "react";
import LinkService from "./LinkService";


export default class AddLink extends Component {
  constructor(props) {
    super(props);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.saveLink = this.saveLink.bind(this);
    this.newLink = this.newLink.bind(this);

    this.state = {
      id: null,
      url: "",
      desc: "",
      submitted: false
    };
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }

  saveLink() {
    var data = {
      url: this.state.url,
      desc: this.state.desc
    };

    LinkService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          url: response.data.url,
          desc: response.data.desc,
          submitted: true
        });
        // console.log("LinkService.create: ", response.data);
      })
      .catch(e => {
        console.log("LinkService.create error: ", e);
      });
  }

  newLink() {
    this.setState({
      id: null,
      url: "",
      desc: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <br/><br/>
            <h4>You have submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newLink}>
              Add Another
            </button>
          </div>
        ) : (
          <div>
            <h4 style={{ marginTop: 15 }}>Add Link</h4>
            <div className="form-group">
              <label htmlFor="title">URL</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.url}
                onChange={this.onChangeUrl}
                name="title"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="description">Desc</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.desc}
                onChange={this.onChangeDesc}
                name="description"
              />
            </div>
            <br />
            <button onClick={this.saveLink} className="btn btn-success" disabled={((this.state.url === "") || (this.state.desc === ""))}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
