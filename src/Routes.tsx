import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import { ProjectList } from './ProjectList';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/projects" exact component={ProjectList} />
    { /* A catch all route for unmatched routes */}
    <Route component={NotFound} />
  </Switch>;
