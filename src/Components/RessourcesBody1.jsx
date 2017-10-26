import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';


class RessourcesBody1 extends Component {


  render() {

    return(
      <Grid>
        <Row className="show-grid">
          <Col xs = {3} md = {4}>

          </Col>
          <Col xs={20} md={12}>
            <div className = "OverviewSmall">
              {/* <div className = "spacerMedium" /> */}
              <div className = "spacerBig" />
              <h1 className = "heading" >Ressources for members</h1>
              <div className = "spacerSmall" />
            </div>
          </Col>
          <Col xs = {3} md = {4}>

          </Col>


        </Row>
        <div className = "spacerMedium" />
        {/* <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/> */}

        <div style = {{textAlign:"center"}}>
        <Row className="show-grid" style = {{  display: "inlineBlock", width: "90%", paddingLeft: "10%"}}>
          <Col xs={6} md={4}>

            <h2 >Software</h2>
            <div className = "spacerSmall" />
            <p2><a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=cd619775eb&amp;e=d716614382"> Self-Driving Vehicle Online Course </a><br />
            <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=a991992372&amp;e=d716614382">ROS Tutorials</a><br />
            <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=8483daee82&amp;e=d716614382">OpenCV Tutorials</a><br />
            <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=cee94c70ae&amp;e=d716614382">Autoware</a><br />
            <a href="http://watonomous.us15.list-manage1.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=8b78a54353&amp;e=d716614382">Intro to Dev-ops</a><br />
            <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=ccf310d230&amp;e=d716614382">PCL Tutorials</a></p2>
          </Col>

          <Col xs={6} md={4}>
            <h2 >Electrical</h2>
            <div className = "spacerSmall" />
            <p2>
              <a href="http://watonomous.us15.list-manage1.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=3e330734e5&amp;e=d716614382">Intro to Embedded Systems</a>  <br />
              <a href="http://watonomous.us15.list-manage1.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=d6bc00d9d1&amp;e=d716614382">Arduino Project Ideas</a><br />
              <a href="http://watonomous.us15.list-manage1.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=e813ab1179&amp;e=d716614382">
              Internet of Things and Embedded Systems Online Course</a>
              <br />
              <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=985d5173b3&amp;e=d716614382">Signal Processing Tutorials</a>
            </p2>
          </Col>
          <Col xs={4}>
            <h2  >Mecanical</h2>
            <div className = "spacerSmall" />
            <p2>
              <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=81b2f2c2b2&amp;e=d716614382">Modelling Tutorials</a><br />
              <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=921f4495ce&amp;e=d716614382">Bicycle Vehicle Dynamics and Kinematics Model</a><br />
              <a href="http://watonomous.us15.list-manage.com/track/click?u=26c21fbb84b5f792d13658d82&amp;id=b1e27bdcfb&amp;e=d716614382">Vehicle Dynamics Modelling Simulation Tutorial</a>
            </p2>
          </Col>
        </Row>
      </div>
      <div className = "spacerMedium"/>


      {/* Team photo needed here */}


      <Row className="show-grid">
        <Col xs = {3} md = {4}>

        </Col>
        <Col xs={20} md={12}>
          <div className = "OverviewSmall">
            {/* <div className = "spacerMedium" /> */}
            <div className = "spacerBig" />
            <h1 className = "heading" >Ressources for Applicants</h1>
            <div className = "spacerSmall" />
          </div>
        </Col>
        <Col xs = {3} md = {4}>

        </Col>


      </Row>


      {/* Ressources needed here, preferably arranged in column format ensuring that both start on an even level. This can be done by copy pasting a bunch or writing a function and importing information from another file, whatever gets it done */}

      </Grid>

    );
  }


}

export default RessourcesBody1;
