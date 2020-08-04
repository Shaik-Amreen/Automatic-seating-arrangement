import React from 'react';
import image from "../main.jpg";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import './form.css'
const Home = () =>{

 return(
  <div className="nav"  style={{backgroundImage: `url(${image}` }}>
  
  <MDBContainer className="am" >
        <MDBRow>
        <MDBCol md="6">
          <MDBCard >
            <MDBCardBody className="mx-4">&nbsp;&nbsp;
        <Link to="/"> <strong> HOME</strong></Link> &nbsp; &nbsp; &nbsp;
        <Link to="/Student"><strong>STUDENT</strong> </Link> &nbsp; &nbsp;
       <Link to="/faculty"> <strong>FACULTY</strong>  </Link> 
       </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
 
  </div>
 )

} 

export default Home;