import React, { Component } from "react";
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


class Signin extends Component{

  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }


  // create func to get update of the inputs
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  };

  onSubmitSignIn = () => {
    fetch('https://blooming-plateau-74830.herokuapp.com/signin', {
      method: 'POST',
      //mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      }),
    }).then(response => response.json())
    .then(user => {
      if(user.id){
        // upload user profile data
        this.props.loadUser(user);
        // redirect to home
        this.props.onRouteChange('home');
      }
    })
  }



  render(){
    const {onRouteChange} = this.props;
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
                      onChange={this.onEmailChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={this.onPasswordChange}
                    />
                  </div>

                <div className="text-center mt-4">
                  <MDBBtn
                      onClick={this.onSubmitSignIn}
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
};

export default Signin;