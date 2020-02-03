import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

let styleConfig = { backgroundColor : '#2bbbad'};

class Navigation extends Component {

  render() {
    return (
      <Router>
        <MDBNavbar style={styleConfig}  dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text ml-3">FACEWHO</strong>
          </MDBNavbarBrand>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="#!">Sign Out</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
      </Router>
      );
  }
}

export default Navigation;