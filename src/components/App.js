import React from "react";
import Login from "./Login";
import Register from "./Register";
import Homepage from "./Homepage";
import Signout from "./Signout";

import { Navbar, Nav, NavItem } from 'react-bootstrap';

// import route Components here
import {
    Router as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
//import { createBrowserHistory } from 'history';
//export const history = createBrowserHistory();
import history from "./history"

const App = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Brand New App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem >
            <Signout/>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router history={history}>
      <div>
        <Switch>
        <Route exact={true} path='/' component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/homepage" component={Homepage} />
        <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
