import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { MDBContainer} from "mdbreact";



 // inital state for the user info
 const initalState = {
  input: '',
  imgUrl:'',
  box: {},
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
},
};
 
class App extends Component {
  // create state with a constructor
  constructor(){
    super();
    this.state = initalState;
  };


  // create func to update user profile
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }


  // create func to pass as para to ImageLinkForm

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

    // dom
    const inputImage = document.getElementById("inputImage");
    const width =  Number(inputImage.width);
    const height =  Number(inputImage.height);

    // regions of the box is % of the img
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: (width - (clarifaiFace.right_col * width)),
      bottomRow: (height - (clarifaiFace.bottom_row * height))
    }
  };

  displayFaceBox = (box) =>{
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onPictureSubmit = (e) => {
    this.setState({imgUrl: this.state.input});
    fetch('http://localhost:4000/imageUrl', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('http://localhost:4000/image', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}));
        })
        this.displayFaceBox(this.calculateFaceLocation(response));
      }
    }).catch(err =>{
      console.log(err)
    })
  };
  // route change func
  onRouteChange = (route) =>{
    this.setState({route: route});
  }

  onLogout = () =>{
    this.setState({  input: '', imgUrl:'', box: {}})
  }
  

  render(){
    return (
      <div className="h-100">
        <Particles
          
          params={{
            "particles": {
                "number": {
                    "value": 100
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} 
        style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1
            }}

        />
        <Navigation /> 

        { this.state.route === "home"
          ? <MDBContainer className="text-center font-weight-bold">
                <Rank onRouteChange={this.onRouteChange} onLogout={this.onLogout} name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm  
                onInputChange = {this.onInputChange} 
                onPictureSubmit={this.onPictureSubmit}
                />
                <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box} />


            </MDBContainer>
          : (
            this.state.route === "signin"
          ? <Signin onRouteChange={this.onRouteChange}  loadUser={this.loadUser} />
          : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
}

export default App;
