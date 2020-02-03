import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
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
    }
  }
  
  // create func to pass as para to ImageLinkForm
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
        console.log("oooops!", err);
      }
    );
  }


  render(){
    return (
      <div>
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

        <MDBContainer className="text-center font-weight-bold">
            <Rank />
            <ImageLinkForm  
            onInputChange = {this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
            />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
