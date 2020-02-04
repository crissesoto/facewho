import React from "react";
import "./imageLinkForm.css";
import {  MDBBtn} from "mdbreact";

let styleConfig = {width: 75 + "%"};

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
          <div id="imageForm" m-auto="true" style={{height: 130 + "px"}}>
            <div  className="form-inline m-auto w-50 d-flex justify-content-center">
                <input onChange={onInputChange}  style={styleConfig} type="text" placeholder="Scan picture" className="form-control text-center"  />
                <MDBBtn onClick={onButtonSubmit} className="text-center ">Scan</MDBBtn> 
            </div>
          </div>
      );
}

export default ImageLinkForm;