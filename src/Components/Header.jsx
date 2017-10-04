import React, { Component } from 'react';
import '../Css/styles.css';
import logo from '../Images/logo.svg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {



  render() {

    return(
      <div className = "header">


        <Navbar style = {{background: "", border: "0", color: "#FFF"}} className = "navItem" inverse fixedTop >
          <Navbar.Header>
            <Nav>
            <Navbar.Brand >

              <a href="#" className = "navItem" >Watonomous</a>
              {/* <p className = "navItem" ></p> */}



            </Navbar.Brand>
          </Nav>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Autonomous</NavItem>
              <NavItem eventKey={2} href="#">Mechanical</NavItem>
              <NavItem eventKey={2} href="#">SAE Autodrive</NavItem>

              {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown> */}
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Wato Team</NavItem>
              <NavItem eventKey={2} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <header className="headerLogo">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>

  );
}

}

export default Header
