import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './form.css'
function Branch() {
const [room,setroom]=useState([])
const [arr,setArr]=useState([])
let data=[],fr=[], UniqueList=[];
  useEffect(() => {
    axios.get('http://localhost:4000/Stu')
    .then((res) => {
     data.push(...res.data)
setArr(data)
}).catch((err) => {
      console.log(err); });
 }, [])

  return (
    <div className="final"> <br/>
    
   <span style={{textAlign:"center",color:"#000249"}}>
     <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/>
       <h3 className="header"> STUDENT ROOM ALLOCATION BRANCH WISE</h3>
    <button  style={{float:"left",background:"black"}}><h5><Link to="/admin" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </button>
   <button  style={{float:"left",background:"black"}}><h5><Link to="/faculty" style={{ color: '#FFF' }}><strong>PREVIOUS PAGE</strong> </Link></h5> </button>
   <button style={{float:"right",background:"black",color:"#FFF",fontWeight:"900",padding:"0.5%"}} onClick={() => window.print()}>PRINT</button>
   <br/><br/>
<table class="table table-bordered" style={{background:"white"}}>
    <thead>
        <tr style={{fontWeight:"700"}}><td>Rollno</td><td>Name</td><td>RoomNo</td><td>Branch</td><td>Year</td></tr>
    </thead>
    <tbody>
       {arr.map((e,i) =>(<tr key={i}><td> {e.rollno}</td><td>{e.name}</td><td>{e.roomno}</td><td>{e.branch}</td><td>{e.year}</td></tr>))}
   </tbody>
</table>
</div>

  )
}

export default Branch

