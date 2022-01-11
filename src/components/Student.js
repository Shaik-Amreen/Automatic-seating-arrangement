import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Result';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
//import './form.css'
import image from "../header.jpg";
function Student() {
const [roll,setroll]=useState('')
const [arr,setArr]=useState([])
const [step,setStep]=useState(0)
const [result,setResult]=useState('')
const [name,setName]=useState('')
const [branch,setBranch]=useState('')
const [year,setYear]=useState('')
const [remove,setremove]=useState(false)
let data=[];
const prevStep = () => {
  setStep(0)
setroll('') 
setResult(''); };
const handleChange=(e)=>{
if(e.target.value ==='19691a'){
  alert("letters should be capital")
}
 setroll(e.target.value)
 e.preventDefault();
}
const handleSubmit=(e)=>{
if(roll.length===10){
e.preventDefault();
setStep(1)      
arr.map(stu=>
    (stu.rollno)===roll?
  <div>{setResult(stu.room)}
  {setName(stu.name)}
  {setBranch(stu.branch)}
  {setYear(stu.year)}</div>
:null)
 }
else{
 alert('YOUR NUMBER SHOULD BE 10 DIGITS')
 
}}

//console.log(values)


const change=()=>{setremove(false)}


  useEffect(() => {
    axios.get('http://localhost:4000/Stu')
    .then((res) => {
      //console.log(res.data) 
     data.push(...res.data)
   setArr(data)
 }).catch((err) => {
      console.log(err);});
      document.getElementById("input1").focus()}, [])
  return (
    <div>

       { (step===1)?
          <Result
           result={result}
          prevStep={prevStep}
          name={name}
          year={year}
          branch={branch}

          />:null
       }{(step===0)?
        <div className="logo" style={{/*backgroundImage: `url(${image}`*/ }}>
              <button onClick={()=>{setremove(true)}}>click me</button>
      <Modal show ={remove} onHide={change}>
< div class="card" style={{width:"75%",textAlign:"left",paddingLeft:"2%"}}>work experience eligibility criteria</div>
<span style={{textAlign:"right",padding:"2%"}}>
      <button class="btn btn-primary">Add Sector wise criteria</button>
</span>
<div class="form-inline justify-content-center">
<span style={{textAlign:"center"}}>Please specify total months of experience required for candidates to apply</span>
<table><tr><td>Minimum total experience (In months)</td><td></td><td>
<input class="form-control" placeholder="0" style={{width:"40%",height:"25px",borderRadius:"0px",borderColor:"grey"}}/>
</td></tr></table>
<span style={{textAlign:"left"}}>Maximum total experience (In months) <input placeholder="0" style={{width:"10%"}}/></span>
<span style={{textAlign:"left"}}>Experience in position type <input placeholder="select some options" style={{textAlign:"right",width:"30%"}}/></span>
< span style={{textAlign:"left"}}>Select one or more position types. Students who have any matching position type will be considered eligible
</span></div>
<span style={{textAlign:"right",padding:"2%"}}>
      <button class="btn btn-primary">save</button>
   <span style={{textAlign:"right",padding:"2%"}}>
      <button class="btn btn-primary">cancel</button>
   </span></span>
<span style={{textAlign:"left",paddingleft:"2%"}}>
<button class="btn btn-primary">clear Eligibility</button></span>
</Modal>
<form onSubmit={handleSubmit}>
<div className="form">
<MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard >
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong className="heading">SEARCH FOR ROOM</strong>
                </h3>
              </div>
              <MDBInput
                label={<div><strong>ENTER YOUR ROLL NUMBER</strong>  [ alert  : "a" should be capital ]</div>}
                group
                type="text"
                validate
                value={roll} 
                onChange={handleChange} 
                id="input1"
                error="wrong"
                success="right"
              />
           
              <MDBBtn color="primary" type="submit">SUBMIT</MDBBtn> &nbsp;
              <Link to="/client"><strong>BACK TO HOME</strong> </Link>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   
  </div>
 
</form></div>:null}


</div> 

  )
}

export default Student
