import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import { Link } from 'react-router-dom';
import image from "./book.png";
import './form.css'
function Faculty() {

    return (
        <div className="faculty" style={{backgroundImage: `url(${image}` }}>
            <MDBContainer className="car">
      <MDBRow>
        <MDBCol md="10">
          <MDBCard >
            <MDBCardBody className="mx-4">
          <br/>
              <li><Link to="/branch"><strong>CHECK ACCORDING TO BRANCH</strong> </Link></li><br/>
              <li><Link to="/rooms"><strong>CHECK ACCORDING TO ROOMS</strong> </Link></li><br/>
              <li><Link to="/client"><strong>BACK TO HOME</strong> </Link></li><br/>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   
        </div>
    )
}

export default Faculty
