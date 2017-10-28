import React, {Component} from 'react';
import '../Css/styles.css';
import WatoLogo from '../Images/WATOlogoblue.svg';

import {Grid, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


class SliderScroll extends Component {


  constructor(props) {
    super(props);
    this.state =  {
      dots : true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true
      // slidesToScroll: 1
    }

  }

  render() {



    return (
      <div>
        <Slider {...this.state}>
          <div style = {{width: "200px"}}><img src = {WatoLogo}></img></div>
          <div style = {{width: "200px"}}><img src = {WatoLogo}></img></div>
          <div style = {{width: "200px"}}><img src = {WatoLogo}></img></div>
          <div style = {{width: "200px"}}><img src = {WatoLogo}></img></div>
          <div style = {{width: "200px"}}><img src = {WatoLogo}></img></div>


        </Slider>
      </div>
    );
  }

}



class MediaBody1 extends Component {


  render() {

    return(
      <div>

        <Grid>

          <Row className="show-grid">
            <Col xs = {3} md = {4}>

            </Col>
            <Col xs={20} md={12}>


              <div className = "OverviewSmall">
                {/* <div className = "spacerMedium" /> */}
                <div className = "spacerBig" />

                <h1 className = "heading" >Follow us in the news and on social media. </h1>
                <div className = "spacerSmall" />

                <p className = "descriptionText">"They will work with real-world applications of advanced computation methods such as computer vision, pattern recognition, and autonomous vehicle controls." <br /> -General Motors Newsroom

              </p>






            </div>
          </Col>
          <Col xs = {3} md = {4}>

          </Col>


        </Row>
        <SliderScroll />

        <div className = "spacerMedium" />
        <div style = {{textAlign:"center"}}>
          <img style = {{height:"200px", marginTop: "-50px"}} src = {WatoLogo}/>

        </div>

        <Row className="show-grid" style = {{width:"90%", paddingLeft: "10%"}}>
          <Col xs={6} md={4}>

            <h2 >Year 1</h2>
            <div className = "spacerSmall" />
            <p2 >Focuses on concept selection by having us become familiar with sensing and computation software. These simple missions can include straight roadway driving and object avoidance/detection. The Year 1 final competition will be hosted at GM’s Desert Proving Ground in Yuma, Arizona.</p2>
          </Col>

          <Col xs={6} md={4}>
            <h2 >Year 2</h2>
            <div className = "spacerSmall" />
            <p2>We will refine our concept selections into solid system developments and will have more challenging dynamic events for testing on-site, including dynamic object detection and multiple lane changing.
            </p2>
          </Col>
          <Col xs={4}>
            <h2  >Year 3</h2>
            <div className = "spacerSmall" />
            <p2 >Will culminate with final validation of our design and concept refinement. Our autonomous car will navigate complex objectives of on-site testing, including higher speeds, roundabouts and moving object detection.</p2></Col>
          </Row>

        </Grid>
      </div>
    );
  }


}

export default MediaBody1;
