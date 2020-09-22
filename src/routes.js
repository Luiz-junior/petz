import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:id">
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes