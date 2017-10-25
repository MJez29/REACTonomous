import React, {Component}  from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { Parallax } from 'react-scroll-parallax';

import '../Css/styles.css';

import IndexBody1 from './IndexBody1.jsx';
import IndexBody2 from './IndexBody2.jsx';


import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';
import Watleader from '../Images/WatLeaders.jpg';
import BoltChasis from '../Images/BoltChasis.jpeg';




class Body extends Component {

  render() {

    return (
      <div>






        <IndexBody1/>
        <div className = "spacerBig"></div>

        <div style = {{height: "500px"}}>
          <Parallax bgImage={BoltChasis} strength={400} >
            <div style = {{height: "50px"}}/>
            <div style = {{ width: "100%", textAlign: "center"}}>
              <h1 className = "heading" style = {{color:"#FFF"}}>Electric Self Driving Vehicle
              </h1>
              <h2 style = {{color:"#FFF", textAlign:"center", fontSize: "18px"}}>Join us as we transform the Chevrolet Bolt into North America's finest autonomous vehicle
              </h2>
              <Button bsStyle="primary" >Apply Now</Button>
              <div style = {{height: "300px"}}/>


            </div>

          </Parallax>
        </div>


        <IndexBody2 />

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

      <IndexBody1 />



    </div>
  );

}

}

export default Body;
