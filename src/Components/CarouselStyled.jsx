import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from 'react-parallax-component';



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







          <Parallax bgImage={ParallaxImg1} strength={400} style = {{zIndex: "3"}} >
            <div style={{
              width: '100%',
              height: '100vh',
              overflow: 'hidden',
            }}>
            <video
              autoPlay
              muted
              loop
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              src="https://drive.google.com/uc?export=download&id=0B-e2EwA68EQgMDFjeEh2WEVXYW8"
            />
            </div>

            {/* <div style = {{height: "100vh"}}>
              <div style = {{backgroundColor: "#222", width: "400px", marginLeft: "80px", textAlign: "left", paddingLeft: "10px"}}>
                <h1 className = "ParallaxTitle">   Welcome to Watonomous </h1>
              </div>
            </div> */}
          </Parallax>

        </div>

        <Carousel.Caption>
          <h3>Wato Self-Driving Car Team</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
        <div className = "videoBackground" alt="900x500" >





          <div className = "Carousel" alt="900x500" />




        </div>

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
