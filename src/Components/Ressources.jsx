import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import '../Css/styles.css';
import RessourcesBody1 from './RessourcesBody1.jsx';



class Ressources extends Component {

  render() {

    return(
      <div>
        <RessourcesBody1 />

      </div>

    );

  };


}


export default Ressources
