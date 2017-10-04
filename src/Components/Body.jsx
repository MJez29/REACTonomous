import React, {Component}  from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import '../Css/styles.css';

import BodyIndex from './BodyIndex.jsx';

import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';




class Body extends Component {

  render() {

    return (
      <div>
        <div className = "spacerMedium" />

        <BodyIndex/>
        <div className = "spacerBig"></div>

        <div style = {{height: "500px"}}>
          <Parallax bgImage={ParallaxImg1} strength={400} style = {{zIndex: "3"}} >
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>

            <div style = {{backgroundColor: "#222", width: "400px", marginLeft: "80px", textAlign: "left", paddingLeft: "10px"}}>
              <h1 className = "ParallaxTitle">   Waterloo. Autonomous </h1>

            </div>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>



          </Parallax>
        </div>


        <BodyIndex />

        <div style = {{height: "600px"}}>
          <Parallax bgImage={BoltFront} strength={200} style = {{zIndex: "3"}} >
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>

            {/* <div style = {{backgroundColor: "#222", width: "400px", marginLeft: "80px", textAlign: "left", paddingLeft: "10px"}}>
              <h1 className = "ParallaxTitle">   Waterloo. Autonomous </h1>

            </div> */}
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/>
            {/* <div className = "spacerBig"/>
            <div className = "spacerBig"/> */}
            {/* <div className = "spacerBig"/>
            <div className = "spacerBig"/>
            <div className = "spacerBig"/> */}



          </Parallax>
        </div>

        <BodyIndex />



      </div>
    );

  }

}

export default Body;
