import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import Index from './Components/Index.jsx';
import Media from './Components/Media.jsx';
import Sponsors from './Components/Sponsors.jsx';
import Contact from './Components/Contact.jsx';

import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = "/" component = {Index} />
      <Route exact path = "/media" component = {Media} />
      <Route exact path = "/sponsors" component = {Sponsors} />
      <Route exact path = "/contact" component = {Contact} />
    </Switch>
</Router>,


  document.getElementById('root')
);
registerServiceWorker();
