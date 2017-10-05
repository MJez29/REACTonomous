import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import '../Css/styles.css';
import {Carousel} from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';



import Header from './Header.jsx';
import CarouselStyled from './CarouselStyled.jsx';
import Body from './Body.jsx';

import Car1 from '../Images/carExample.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Header />
          <CarouselStyled />

          <Body />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
