import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      registerConfPassword: '',
    }
  };


  // func to insert to DB

  registerNameOnChange = (event) =>{
    this.setState({
      registerName: event.target.value
    })
  };
  registerEmailOnChange = (event) =>{
    this.setState({
      registerEmail: event.target.value,
    })
  };
  registerPasswordOnChange = (event) =>{
    this.setState({
      registerPassword: event.target.value
    })
  };
  registerPasswordConfOnChange = (event) =>{
    this.setState({
      registerConfPassword: event.target.value
    })
  };

  onSubmitRegister = () => {
    fetch('https://blooming-plateau-74830.herokuapp.com/register', {
      method: 'POST',
      //mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
        registerConfPassword: this.state.registerConfPassword

      }),
    }).then(response => response.json())
    .then(user => {
      // check if passw is identical
      if(user.id){
        // upload user profile data
        this.props.loadUser(user);
        // redirect to home
        this.props.onRouteChange('home');
      }
    })
  };

  


  render(){
    return (
      <MDBContainer>
        <MDBRow center className="mt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <div>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.registerNameOnChange}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.registerEmailOnChange}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.registerPasswordOnChange}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.registerPasswordConfOnChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn 
                      onClick={this.onSubmitRegister}
                      color="cyan" 
                      type="submit"
                      value="register"
                      >
                      Register
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
};

export default Register;