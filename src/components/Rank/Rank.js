import React, { Fragment } from "react";
import "./Rank";
import { MDBBtn} from "mdbreact";


const Rank = ({onRouteChange}) => {
    return (    
                <Fragment>
                    <MDBBtn
                        onClick={() =>{onRouteChange('signin')}}
                        color="default"
                        className="mb-3 d-flex ml-auto"
                        type="submit"
                        value="home"
                        >Logout
                    </MDBBtn>
                    <h1 className="mt-5">Crisse, your rank is...</h1>
                    <h1>#</h1>
                    <p className=" m-3"> Insert a picture to detect a face.</p>
                </Fragment>
    )
}

export default Rank;