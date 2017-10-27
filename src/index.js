import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import Index from './Components/Index.jsx';
import Media from './Components/Media.jsx';
import Sponsors from './Components/Sponsors.jsx';
import Contact from './Components/Contact.jsx';

import registerServiceWorker from './registerServiceWorker';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Index} />
      <Route path = "/Media" component = {Media} />
      <Route path = "/Sponsors" component = {Sponsors} />
      <Route path = "/Contact" component = {Contact} />
    </Switch>
</BrowserRouter>,


  document.getElementById('root')
);
registerServiceWorker();
