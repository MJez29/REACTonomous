import React, { Component } from 'react';
import '../Css/styles.css';
import logo from '../Images/logo.svg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {



  render() {

    return(
      <div className = "header">


        <Navbar inverse fixedTop >
          <Navbar.Header>
            <Nav>
            <Navbar.Brand >

              <a href="#" className = "navItem" >Watonomous</a>



            </Navbar.Brand>
          </Nav>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Autonomous</NavItem>
              <NavItem eventKey={2} href="#">Mechanical</NavItem>
              <NavItem eventKey={2} href="#">SAE Autodrive</NavItem>


            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Wato Team</NavItem>
              <NavItem eventKey={2} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


    </div>

  );
}

}

export default Header
