import React, { Component } from 'react';
import '../Css/header.css';
import logo from '../Images/WhiteLogoNoSignal.png';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: this.props.home,
    };

  }



  render() {

    return(
      <div className= {this.props.home ? 'header' : 'header2'}>
        <div>
          <ul className="navigation">
            <li className="firstchild"><img src={logo}/></li>
            <li className="button" > <Link to = {'/'} activeStyle={{ color: '#FFF' }} activeClassName = "button" className = "button" > HOME </Link> </li>
            {/* <li class="button">ABOUT</li> */}
            <li className="button"><Link to = {'/sponsors'} className ="button" activeClassName = "button"  > SPONSORS</Link></li>
            <li className="button"><Link to = {'/media'} className ="button" activeClassName = "button"  > MEDIA</Link></li>
            {/* <li class="button">RESSOURCES</li> */}

            <li className="last-child"><Link to = {'/contact'} className ="button" activeClassName = "button"  > CONTACT</Link></li>
          </ul>
        </div>
      </div>

    );
  }

}

export default Header
