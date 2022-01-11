import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import img from './admin.jpg'

import { Link } from 'react-router-dom';
import './form.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
const Printrooms=()=>{
const [room,setroom]=useState([])
const [arr,setArr]=useState([])
let data=[],UniqueList=[];
  useEffect(() => {
    axios.get('http://localhost:4000/Stu')
    .then((res) => {
     data.push(...res.data)
     console.log(data)
    for(let i = 0; i <data.length; i++){
      console.log(data[i]['roomno'],"hyyyyy")
        if(UniqueList.includes(data[i]['room'])) {}
        else {
        UniqueList.push(data[i]['room']);
        setroom( UniqueList) } }
setArr(data)
}).catch((err) => {
      console.log(err); });
     
 }, [])
 var pack=[], nums=[],rm=[],branch=[],branchs=[],name=[],names=[];
  // eslint-disable-next-line 
  console.log("hyyy")
{arr.map((cell, i) =>
      <div>  {nums.push(cell.rollno)};
     {rm.push(cell.room)};
     {branch.push(cell.branch)}{name.push(cell.name)}
  </div>)}
console.log(branch)
for(var i = 0; i <room.length; i++){
    var sub=[];
 for(var j=0;j<nums.length;j++){   
        if(room[i]===rm[j])
   {   
    sub.push(nums[j]);
    branchs.push(branch[j]);
    names.push(name[j])
   }
  }pack.push(sub)
  }

var k=-1;
const add=()=>{
k++;
}
  return (
    <div className="all" style={{background:"#e1f5fe"}}> <br/>
    <span style={{textAlign:"center",color:"#000249"}}>
     <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/>
    <h3 className="header"> STUDENT ROOM ALLOCATION ROOM WISE</h3>
   <br/>   &nbsp; <MDBBtn style={{borderRadius:"0px",float:"left",background:"#000249"}}><h5><Link to="/client" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </MDBBtn>
   &nbsp; &nbsp; &nbsp;
   <MDBBtn style={{borderRadius:"0px",float:"left",background:"#000249"}}><h5><Link to="/faculty" style={{ color: '#FFF' }}><strong>PREVIOUS PAGE</strong> </Link></h5> </MDBBtn>
   <button style={{float:"right",background:"black",color:"#FFF",fontWeight:"900",padding:"0.5%"}} onClick={() => window.print()}>PRINT</button>
          <br/><br/>  {
    pack.map((numList,i) =>(<>
    
      <br/>
      <div class="form-inline justify-content-center">
           <br/>
           <h3>ROOM-NO: { room[i]}</h3>
            <table class="table table-bordered" style={{textAlign:"center",background:"white"}}>
          
        <thead>
       
          <tr>
          <td ><strong>ROLL NUMBER </strong></td>
          <td ><strong>NAME</strong></td>
          <td><strong>BRANCH</strong> </td>
          <td><strong>Sign</strong> </td>
          </tr></thead>
          <tbody>
            {
             numList.map((num,j)=>
                <tr>{add()}
              <td>   &nbsp;  {num}</td>
              <td>  &nbsp; {branchs[k]}</td>
              <td> &nbsp;  {names[k]}</td>
              <td></td>
             </tr>
             )
            }</tbody> </table>
            <br/></div>
            </>
            
        ))
   }
  
   

 
  


    </div>
  )
}

export default Printrooms;
 