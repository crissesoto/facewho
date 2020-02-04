import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBModalFooter
} from "mdbreact";

const Signin = ({onRouteChange}) => {
  return (
    <MDBContainer >
      <MDBRow center className="mt-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header tempting-azure-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <div>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                    onClick={() =>{onRouteChange('home')}}
                    color="default"
                    className="mb-3"
                    type="submit"
                    value="signin"
                >
                  Login
                </MDBBtn>
              </div>
              </div>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p
                    style={{cursor: 'pointer' }}       
                    onClick={() =>{onRouteChange('register')}}
                    >Not a member? Sign Up
                  </p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signin;