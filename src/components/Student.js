import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Result';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import './form.css'
import image from "../header.jpg";
function Student() {
const [roll,setroll]=useState('')
const [arr,setArr]=useState([])
const [step,setStep]=useState(0)
const [result,setResult]=useState('')
const [name,setName]=useState('')
const [branch,setBranch]=useState('')
const [year,setYear]=useState('')
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
        <div className="logo" style={{backgroundImage: `url(${image}` }}>
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
                label={<div><strong>ENTER YOUR ROLLNUMBER</strong>  [ alert  : "a" should be capital ]</div>}
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
              <Link to="/"><strong>BACK TO HOME</strong> </Link>
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
