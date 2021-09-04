import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Previews from './Previews';
import AddLink from './setup/AddLink';
import EditLink from './setup/EditLink';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="App-header-ul">
              <li className="App-header-li">
                <NavLink exact activeClassName="active" to="/">Previews</NavLink>
              </li>
              <li className="App-header-li">
                <NavLink exact activeClassName="active" to="/add">Add Link</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Switch>
        <Route exact path="/" render={(props) => <Previews {...props} /> } />
        <Route exact path="/add" render={(props) => <AddLink {...props} /> } />
        <Route exact path="/edit/:id" render={(props) => <EditLink {...props} /> } />
      </Switch>
    </Router>
  );
}


export default App;
