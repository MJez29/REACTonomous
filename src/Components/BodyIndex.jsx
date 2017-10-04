import React, {Component} from 'react';
import '../Css/styles.css';

import {Grid, Row, Col} from 'react-bootstrap';


class BodyIndex extends Component {


  render() {

    return(
      <Grid>
        <Row className="show-grid">
          <Col xs = {3} md = {4}>

          </Col>
          <Col xs={20} md={12}>


            <div className = "Overview">
              <div className = "spacerMedium" />

              <h1>WATONOMOUS CARS</h1>
              <div className = "spacerSmall" />

              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

              </p>
              <div className = "spacerMedium" />

              <h1>INNOVATION AT WATERLOO</h1>
              <div className = "spacerSmall" />

              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

              </p>
              <div className = "spacerMedium" />

              <h1>NAVIGATION</h1>
              <div className = "spacerSmall" />

              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

              </p>

              <div className = "spacerBig" />




            </div>
          </Col>
          <Col xs = {3} md = {4}>

          </Col>


        </Row>

      </Grid>

    );
  }


}

export default BodyIndex;
