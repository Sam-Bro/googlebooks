import React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Search from "./pages/Search"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </Container>
    </Router>
  ); 
}


export default App;
