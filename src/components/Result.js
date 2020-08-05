import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBBtn} from 'mdbreact';
import image from "../dred.jfif";
import am from '../one.jpg'
import { Link } from 'react-router-dom';
import './form.css'
function Result(props) {
    
    return (
        <div>
        {(props.result!=='')?
      <div className="class"  style={{backgroundImage: `url(${am}` }} >
            
        <MDBContainer  className="start">
      <MDBRow>
        <MDBCol md="8">
          <MDBCard border="primary">
            <MDBCardBody className="mx-4">
        <table className="table">
  <tbody>  
    <tr>
   <td><strong> NAME </strong></td>
      <td><strong> { props.name}</strong></td></tr>
      <tr> <td>BRANCH</td>
      <td>{props.branch}</td></tr>
      <tr> <td>YEAR</td><td>{props.year}</td></tr>
       <tr> <td><strong>ROOM</strong></td><td><strong>{props.result}</strong></td></tr>
      
  </tbody>
</table>
<MDBBtn color="primary" onClick={props.prevStep} >BACK TO PREVIOUS PAGE</MDBBtn>
<div className="back">&nbsp;&nbsp;<Link to="/client" ><strong>BACK TO HOME</strong> </Link></div>
</MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   </div>
:
<div className="danger"  style={{backgroundImage: `url(${image}` }}>
  <MDBContainer  className="details">
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody className="mx-4">
   <h3>YOUR NUMBER IS INVALID PLEASE CHECK AGAIN  </h3>
   <MDBBtn color="dark" onClick={props.prevStep}>BACK TO PREVIOUS PAGE</MDBBtn></MDBCardBody>
   <MDBBtn color="dark" ><h5><Link to="/client" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </MDBBtn>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></div>}


   
        </div>
    )
}

export default Result
