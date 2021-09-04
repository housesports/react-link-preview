import React from 'react';
import {
  Link
} from "react-router-dom";


function Home() {
  return (
    <div class="App-container">
      <br />
      <br />
      <h4>Housesports</h4>
      <br />
      <br />
      <Link to="/previews">ReactJS Link Preview</Link>
    </div>
  );
}


export default Home;
