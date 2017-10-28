import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './Header.jsx'
import '../Css/sponsors.css';
import CarouselImage from './CarouselImage.jsx';
import SponsorBody1 from './SponsorBody1.jsx';



class Sponsors extends Component {

  render() {

    return(
      //I was thinking having quotes in a large font from news releases and linking the newspaper logo next to it, all in a column form.
      <div>

        <Header
          home = {0}
         />
        <CarouselImage />
      </div>

    );

  };


}


export default Sponsors
