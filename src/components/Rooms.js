import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom';
import './form.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
function Rooms() {
const [room,setroom]=useState([])
const [arr,setArr]=useState([])
let data=[],UniqueList=[];
  useEffect(() => {
    axios.get('http://localhost:4000/Stu')
    .then((res) => {
     data.push(...res.data)
     console.log(data)
    for(let i = 0; i <data.length; i++){
      
        if(UniqueList.includes(data[i]['room'])) {}
        else {
        UniqueList.push(data[i]['room']);
        setroom( UniqueList) } }
setArr(data)
}).catch((err) => {
      console.log(err); });
     
 }, [])
 var pack=[], nums=[],rm=[],branch=[],branchs=[];
  // eslint-disable-next-line 
{arr.map((cell, i) =>
      <div>  {nums.push(cell.rollno)};
     {rm.push(cell.room)};
     {branch.push(cell.branch)}
  </div>)}
console.log(branch)
for(var i = 0; i <room.length; i++){
    var sub=[];
  
 
    for(var j=0;j<nums.length;j++){   
        if(room[i]===rm[j])
   {   
    sub.push(nums[j]);
    branchs.push(branch[j]);
    console.log(branchs)
   }
  }pack.push(sub)
  }
  console.log(branchs)
console.log(pack)
var k=-1;
const add=()=>{
k++;
}
  return (
    <div className="all" > <br/>
    <h1 className="header"> STUDENT ROOM ALLOCATION ROOM WISE</h1>
   <br/>   &nbsp; <MDBBtn color="dark" ><h5><Link to="/client" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </MDBBtn>
   &nbsp; &nbsp; &nbsp;
   <MDBBtn color="dark" ><h5><Link to="/faculty" style={{ color: '#FFF' }}><strong>PREVIOUS PAGE</strong> </Link></h5> </MDBBtn>
            {
    pack.map((numList,i) =>(
           <div>
            <MDBContainer   class="container-fluid" >
      <MDBRow>
        <MDBCol md="10">
          <MDBCard>
            <MDBCardBody className="mx-4">
            <Table>
          
        <h3 className="head">  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ROOM-NO: { room[i]}</h3>
        <tr >
          <td ><strong>ROLL NUMBER </strong></td>
          <td><strong>BRANCH</strong> </td></tr>
            {
             numList.map((num,j)=>
                <tr>{add()}
              <td>   &nbsp;  {num}</td>
              <td>  &nbsp; {branchs[k]}</td>
             </tr>
             )
            } </Table>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer><br/></div>
       
        ))
   }
  
   

 
  

 
    </div>
  )
}

export default Rooms;
 