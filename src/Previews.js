import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import './App.css';


function Previews() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://retoolapi.dev/mka0wj/linkdata")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log('result :>> ', result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="App-loading">Loading...</div>;
  } else {
    return (
      <section className="App-wrap">
        <ul className="App-ul">
          {items.map(item => (
            <li key={item.id} className="App-li">
              <div className="App-li-span"><span>{item.id}) </span>{item.desc}: {item.url}</div>
              <div className="App-content"><i>preview here</i></div>
              <small><Link style={{ color: '#ccc' }} to={{  pathname: `/edit/${item.id}`, state: { id: item.id, url: item.url, desc: item.desc }  }} >Edit</Link></small>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}


export default Previews;
