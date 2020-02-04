import React from "react";
import {
MDBNavbar, MDBNavbarBrand} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

let styleConfig = { backgroundColor : '#2bbbad'};

const Navigation = () => {

    return (
      <Router>
        <MDBNavbar style={styleConfig}  dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text ml-3">FACEWHO</strong>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Router>
      );

}

export default Navigation;