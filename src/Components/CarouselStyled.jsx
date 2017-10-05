import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';
import testVideo from '../Images/testVideo.mp4';



import ParallaxImg1 from '../Images/CityPoly.jpg';
import '../Css/styles.css';


class CarouselStyled extends Component {

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

            {/* <ParallaxComponent
              speed="0.003"
              width="300"
              top="40%"
              left="100"
              >
              <div>
              <div className = "Carousel" alt="900x500" />
            </div>
          </ParallaxComponent> */}








          <div className = "center">
            <h1 className = "carouselHeading">WATERLOO</h1>
            <p className = "carouselParagraph">AUTONOMOUS</p>
            <p className = "carouselParagraph2">VEHICLE DESIGN TEAM</p>
          </div>
          <div style={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
          }}>

          <video autoPlay muted   loop style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }} src= "https://dl.dropboxusercontent.com/s/ijanr03i2tlqqxs/Self-driving%20Chevrolet%20Bolt%20EV%20in%20production%20%28online-video-cutter.com%29.mp4?dl=0"
        />
      </div>

    </div>

    {/* <Carousel.Caption>
      <h3>Wato Self-Driving Car Team</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}


  </Carousel.Item>
  <Carousel.Item>



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
  </Carousel.Item>
</Carousel>

);
}

}
export default CarouselStyled;
