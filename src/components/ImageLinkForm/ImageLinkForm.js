import React from "react";
import "./imageLinkForm.css";
import {  MDBBtn} from "mdbreact";

let styleConfig = {width: 75 + "%"};

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
          <div id="imageForm" m-auto="true">
          <form  className="form-inline m-auto w-50 d-flex justify-content-between h-75">
              <input onChange={onInputChange}  style={styleConfig} type="text" placeholder="Scan picture" className="form-control"  />
              <MDBBtn onClick={onButtonSubmit} className="text-center ">Scan</MDBBtn> 
          </form>
          </div>
      );
}

export default ImageLinkForm;