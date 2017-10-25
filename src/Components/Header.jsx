import React, { Component } from 'react';
import '../Css/header.css';
import logo from '../Images/logo.svg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {



  render() {

    return(
      <div class="header">
        <ul class="nav" >
          <li class = "span-full" >RESSOURCES</li>
          <li>HOME</li>
          <li>MEDIA</li>
          <li>SPONSOR</li>
          <li>CONTACT</li>
          <li>SIGNUP</li>
        </ul>

        {/* <ul class=" nav" >
          <li>HOME</li>
          <li>MEDIA</li>
          <li>SPONSOR</li>
          <li>CONTACT</li>
          <li>SIGNUP</li>



        </ul> */}

      </div>

    );
  }

}

export default Header
