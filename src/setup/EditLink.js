import React, { Component } from "react";
import LinkService from "./LinkService";


export default class EditLink extends Component {
  constructor(props) {
    super(props);
    // console.log('EditLink constructor props :>> ', props);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.getLink = this.getLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.deleteLink = this.deleteLink.bind(this);

    if (props.location.state.id) {
      const { location: { state: { id, url, desc }} } = this.props;
      // console.log('constructor id, url, desc :>> ', id, url, desc);
  
      this.state = {
        currentLink: {
          id,
          url,
          desc
        },
        message: ""
      };
    } else {
      this.state = {
        currentLink: {
          id: null,
          url: "",
          desc: ""
        },
        message: ""
      };
    }
  }

  componentDidMount() {
    this.getLink(this.props.match.params.id);
  }

  onChangeUrl(e) {
    const url = e.target.value;

    this.setState(function(prevState) {
      return {
        currentLink: {
          ...prevState.currentLink,
          url: url
        }
      };
    });
  }

  onChangeDesc(e) {
    const desc = e.target.value;
    
    this.setState(prevState => ({
      currentLink: {
        ...prevState.currentLink,
        desc: desc
      }
    }));
  }

  getLink(id) {
    LinkService.get(id)
      .then(response => {
        this.setState({
          currentLink: response.data
        });
        // console.log("EditLink getLink response: ", response.data);
      })
      .catch(e => {
        console.log("EditLink getLink error: ", e);
      });
  }

  updateLink() {
    LinkService.update(
      this.state.currentLink.id,
      this.state.currentLink
    )
      .then(response => {
        // console.log("EditLink updateLink response: ", response.data);
        this.setState({
          message: "The link was updated successfully!"
        });
      })
      .catch(e => {
        console.log("EditLink updateLink response: ", e);
      });
  }

  deleteLink() {   
    // eslint-disable-next-line no-restricted-globals
    const r = confirm("Are you sure you want to delete this link?");

    // cancel clicked
    if (r === false) {
        return false;
    } 
    LinkService.delete(this.state.currentLink.id)
      .then(response => {
        // console.log("EditLink deleteLink response: ", response.data);
        this.props.history.push('/')
      })
      .catch(e => {
        console.log("EditLink deleteLink response: ", e);
      });
  }

  render() {
    const { currentLink } = this.state;
    // console.log('EditLink this.props :>> ', this.props);
    return (
      <div>
        {currentLink ? (
          <div className="edit-form">
            <h4 style={{ marginTop: 15 }}>Edit Link</h4>
            <form>
              <div className="form-group">
                <p style={{ fontSize: '10px' }}><i>Editing: {currentLink.id}</i></p>
                <label htmlFor="url">URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  value={currentLink.url}
                  onChange={this.onChangeUrl}
                />
              </div>
              <br/>
              <div className="form-group">
                <label htmlFor="desc">Desc</label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  value={currentLink.desc}
                  onChange={this.onChangeDesc}
                />
              </div>
            </form>
            <br />
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteLink}
              style={{ marginRight: 15, backgroundColor: '#282c34' }}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateLink}
              style={{ marginRight: 15, backgroundColor: '#282c34' }}
              disabled={((this.state.url === "") || (this.state.desc === ""))}
            >
              Update
            </button>
            <br/>
            <br/>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click Edit on a Link in Previews...</p>
          </div>
        )}
      </div>
    );
  }
}
