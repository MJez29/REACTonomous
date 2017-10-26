import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';
import Intel from '../Images/Intellogo.png';
import MathWorks from '../Images/Mathworkslogo.svg';
import Velodyne from '../Images/Velodynelogo.png';
import WaterlooEng from '../Images/WaterlooGooseLogo.jpeg';
import GeneralM from '../Images/GMlogo.jpg'


class IndexBody3 extends Component {


  render() {

    return(
      <div className = "greyBackgroundColor">
        <Grid>
          <Row className="show-grid">
            <Col xs = {3} md = {4}>

            </Col>
            <Col xs={20} md={12}>


              <div className = "OverviewSmall">
                {/* <div className = "spacerMedium" /> */}
                <div className = "spacerBig" />

                <h1 className = "heading" >Bolting design</h1>
                <div className = "spacerSmall" />

                <p className = "descriptionText">Using cutting edge cameras, lidar sensors, and industry leading image processing, WATonomous is configuring the Bolt in a reliable autonomous car.
                </p>




              </div>
            </Col>
            <Col xs = {3} md = {4}>

            </Col>


          </Row>
          <div className = "spacerMedium" />
          {/* <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/> */}

          {/* <Row className="show-grid">
            <Col xs={6} md={4}>
              <img style = {{width:"200px"}} src = {GeneralM}/>


            </Col>

            <Col xs={8} md={4}>
              <img style = {{width:"400px", lineHeight: "200px"}} src = {Velodyne}/>

            </Col>
            <Col xs={4}>
              <img style = {{width:"200px"}} src = {Intel}/>

            </Col>
            </Row> */}

          </Grid>
        </div>

      );
    }


  }

  export default IndexBody3;
