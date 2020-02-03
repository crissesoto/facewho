import React from 'react';
import './FaceRecognition.css'
import { MDBContainer } from 'mdbreact';

const FaceRecognition = ({imgUrl, box}) =>{
    return(
            <MDBContainer className="m-auto imgDiv" style={{width: 520 + "px"}}>
                <img id="inputImage" src={imgUrl} width="500" height="333" alt="" />
                <div className="boudingBox" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </MDBContainer>
    );
}

export default FaceRecognition;