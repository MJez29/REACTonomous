import React, {Component}  from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { Parallax } from 'react-scroll-parallax';

import '../Css/styles.css';

import BodyIndex from './BodyIndex.jsx';

import ParallaxImg1 from '../Images/CityPoly.jpg';
import BoltFront from '../Images/BoltFront4.png';




class Body extends Component {

  render() {

    return (
      <div>


        <Grid>
          <Row className="show-grid">
            <Col xs = {3} md = {4}></Col>
            <Col xs={20} md={12}>
              <div className = "Overview">
                {/* <div className = "spacerMedium" /> */}
                <h1 className = "heading" >WATONOMOUS CARS</h1>
                <div className = "spacerSmall" />
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </Col>
            <Col xs = {3} md = {4}></Col>
          </Row>
        </Grid>


        <div style={{
          width: '100%',
          height: '500px',
          overflow: 'hidden',
        }}>
        <video
          autoPlay
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </div>

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
