import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';

import WatoSocialCar from '../Images/WatoGroupWithCar.jpg';



import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';


class CarouselImage extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      index : 0,
      direction: 'next',
    }

    this.handleSelect = this.handleSelect.bind(this)

  }

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return(
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
        <Carousel.Item >
          <div>

            <div className = "center" style = {{paddingTop: "0px"}}>
              <h1 className = "carouselHeading">WATERLOO</h1>
              <p className = "carouselParagraph">AUTONOMOUS</p>
              <p className = "carouselParagraph2">VEHICLE DESIGN TEAM</p>
            </div>
            <div style={{
              width: '100%',
              height: '90vh',
              overflow: 'hidden',

            }}>
            <div style = {{
              backgroundImage: `url(${this.props.image})`,
              objectFit: 'cover',
              width: '100vw',
              height: '90vh',
              backgroundSize: "100%"
            }} >

          </div>

        </div>

      </div>

      {/* <Carousel.Caption>
        <h3>Wato Self-Driving Car Team</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}


    </Carousel.Item>
    {/* <Carousel.Item>



      <Parallax bgImage={ParallaxImg1} strength={400} style = {{zIndex: "3"}} >
      <div style = {{height: "100vh"}}/>
    </Parallax>





    <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<div className = "Carousel" alt="900x500" />
<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item> */}
</Carousel>

);
}

}
export default CarouselImage;
