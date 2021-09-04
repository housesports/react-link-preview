import React from 'react';
import {
  Link
} from "react-router-dom";


function NotFound() {
  return (
    <div class="App-container">
      <br />
      <br />
      <br />
      <br />
      <Link style={{ fontSize: '12px', color: 'black', marginRight: '0px' }} to="/">Go to Previews</Link>
    </div>
  );
}


export default NotFound;
