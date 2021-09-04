import React from 'react';
import {
  Link
} from "react-router-dom";


function Home() {
  return (
    <div class="App-container">
      <br />
      <br />
      <br />
      <br />
      <Link style={{ fontSize: '12px', color: 'black' }} to="/previews">ReactJS Link Preview Demo</Link>
    </div>
  );
}


export default Home;
