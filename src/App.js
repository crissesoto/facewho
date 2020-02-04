import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { MDBContainer} from "mdbreact";

// initialize with your api key. 
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: '40a4c9f4fa9f4cf2987ac1468de6b445'
 });
 
class App extends Component {
  // create state with a constructor
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl:'',
      box: {},
      route: 'signin'
    }
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

  onButtonSubmit = (e) => {
    this.setState({imgUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      }).catch(err =>{
        console.log(err)
      })
  };


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
        { this.state.route === "signin" 
          ? <Signin />
          : <MDBContainer className="text-center font-weight-bold">
              <Rank />
              <ImageLinkForm  
              onInputChange = {this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box} />


            </MDBContainer>
        }
      </div>
    );
  }
}

export default App;
