import React, { Component } from 'react';
import '../Css/header.css';
import logo from '../Images/WhiteLogoNoSignal.png';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {



  render() {

    return(
      <div class="header">
        <ul class="navigation">
      		<li class="firstchild"><img src={logo}/></li>
      		<li class="button">HOME</li>
      		{/* <li class="button">ABOUT</li> */}
      		<li class="button">SPONSORS</li>
      		<li class="button">MEDIA</li>
          {/* <li class="button">RESSOURCES</li> */}

      		<li class="lastchild">CONTACT</li>
      	</ul>



      </div>

    );
  }

}

export default Header
