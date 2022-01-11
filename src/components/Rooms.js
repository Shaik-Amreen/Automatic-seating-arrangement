import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './form.css'
import { MDBBtn} from 'mdbreact';
const Rooms=()=>{
const [room,setroom]=useState([])
const [arr,setArr]=useState([]);const [exam,setexam]=useState([])
let data=[],UniqueList=[];
  useEffect(() => {
    axios.get('http://localhost:4000/Stu')
    .then((res) => {
     data.push(...res.data)
     console.log(data)
    for(let i = 0; i <data.length; i++){
      
        if(UniqueList.includes(data[i]['roomno'])) {}
        else {
        UniqueList.push(data[i]['roomno']);
        setroom( UniqueList) } }
setArr(data)
}).catch((err) => {
      console.log(err); });
     
 }, [])
 var pack=[], nums=[],rm=[],branch=[],branchs=[],name=[],names=[],examt=[],exams=[];
  // eslint-disable-next-line 
{arr.map((cell, i) =>
      <div>  {nums.push(cell.rollno)};
     {rm.push(cell.roomno)};
     {branch.push(cell.branch)}{name.push(cell.name)}{examt.push(cell.exam)}
  </div>)}
console.log(branch)
for(var i = 0; i <room.length; i++){
    var sub=[];
 for(var j=0;j<nums.length;j++){   
        if(room[i]===rm[j])
   {   
    sub.push(nums[j]);
    branchs.push(branch[j]);
    names.push(name[j]);exams.push(examt[j])
   }
  }pack.push(sub)
  }

var k=-1;
const add=()=>{
k++;
}
  return (
    <div  style={{background:"#e1f5fe"}}> 
   <button style={{float:"left",background:"#000249",fontWeight:"900"}}><Link to="/faculty" style={{ color: '#FFF' }}>PREVIOUS PAGE </Link> </button>
   <button style={{float:"right",background:"black",color:"#FFF",fontWeight:"900"}} onClick={() => window.print()}>PRINT</button>

 {
    pack.map((numList,i) =>(<>

      <div class="form-inline justify-content-center">

           <h3>ROOM-NO: { room[i]}</h3>
            <table class="table table-bordered" style={{textAlign:"center",background:"white"}}>
          
        <thead>
       
          <tr>
          <td ><strong>ROLL NUMBER </strong></td>
          <td ><strong>NAME</strong></td>
          <td><strong>BRANCH</strong> </td>
          <td><strong>COURSE</strong> </td>
          <td><strong>Sign</strong> </td>
          </tr></thead>
          <tbody>
            {
             numList.map((num,j)=>
                <tr>{add()}
              <td>   &nbsp;  {num}</td>
              <td> &nbsp;  {names[k]}</td>
              <td>  &nbsp; {branchs[k]}</td>
              <td>  &nbsp; {exams[k]}</td>
              <td></td>
             </tr>
             )
            }</tbody> </table>
</div><br/><br/><br/>
            </>
            
        ))
   }
  
   

 
  


    </div>
  )
}

export default Rooms;
 /*<br/>
    <span style={{textAlign:"center",color:"#000249"}}>
     <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/>
    <h3 className="header"> STUDENT ROOM ALLOCATION ROOM WISE</h3>
   <br/>   &nbsp; <MDBBtn style={{borderRadius:"0px",float:"left",background:"#000249"}}><h5><Link to="/client" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </MDBBtn>
   &nbsp; &nbsp; &nbsp;
   <MDBBtn style={{borderRadius:"0px",float:"left",background:"#000249"}}><h5><Link to="/faculty" style={{ color: '#FFF' }}><strong>PREVIOUS PAGE</strong> </Link></h5> </MDBBtn>
   */