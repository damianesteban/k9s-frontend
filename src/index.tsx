import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import NotFound from './containers/NotFound';
// import Login from './containers/Login';
// import { AppliedRoute } from './components/AppliedRoute';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
