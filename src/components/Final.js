import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import {MDBBtn} from 'mdbreact';
import { Link } from 'react-router-dom';
import './form.css'
function Final() {
const [room,setroom]=useState([])
const [arr,setArr]=useState([])
let data=[],fr=[], UniqueList=[];
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
 var cse=[], d=[],ece=[],cst=[],mech=[],cser=[],ecer=[],cstr=[],mechr=[],
 csers=[],ecers=[],mechrs=[],cstrs=[];
  // eslint-disable-next-line 
{arr.map((cell, i) =>(cell.branch==='CSE')?
      <div>  {cse.push(cell.rollno)};
      {cser.push(cell.room)}
  </div>:null)}
var  x=cse.length/12;
// eslint-disable-next-line 
{arr.map((cell, i) =>(cell.branch==='ECE')?
      <div>  {ece.push(cell.rollno)};
      {ecer.push(cell.room)}
  </div>:null)}
// eslint-disable-next-line 
{arr.map((cell, i) =>(cell.branch==='CST')?
      <div>  {cst.push(cell.rollno)};
      {cstr.push(cell.room)}
  </div>:null)}
// eslint-disable-next-line 
{arr.map((cell, i) =>(cell.branch==='MECHANICAL ENGINEERING')?
      <div>  {mech.push(cell.rollno)};
      {mechr.push(cell.room)}
  </div>:null)}

d.push('CSE','CST','ECE','MECHANICAL ENGINEERING')

 for(var i=0;i<room.length;i++){
fr.push(room[i])}


var cses=[];
cses.push(cse[0])
var  z=10, m=[];
for(var s=0;s<x;s++){
z=z+1
m.push(cse[z])
csers.push(cser[z]);
 z=z+11;} 
 z=10;
for( s=1;s<x;s++){
z=z+1;
cses.push(cse[z+1]);

 z=z+11; }


 var eces=[];
eces.push(ece[0])
z=10;
var me=[];
for( s=0;s<x;s++){
z=z+1
me.push(ece[z]);
ecers.push(ecer[z]);
 z=z+11;} 
 z=10;
for( s=1;s<x;s++){
z=z+1
   eces.push(ece[z+1]);

 z=z+11; }


 var mechs=[];
mechs.push(mech[0])
  z=10;
 var mer=[];
 for( s=0;s<x;s++){
 z=z+1
 mer.push(mech[z]);
mechrs.push(mechr[z]);
  z=z+11;} 
  z=10;
 for(s=1;s<x;s++){
 z=z+1
    mechs.push(mech[z+1]);
 
  z=z+11; }

  var csts=[];
  csts.push(cst[0])
   z=10;
  var mern=[];
  for(s=0;s<x;s++){
  z=z+1
  mern.push(cst[z]);
cstrs.push(cstr[z]);
   z=z+11;} 
   z=10;
  for( s=1;s<x;s++){
  z=z+1
     csts.push(cst[z+1]);
  
   z=z+11; }
  return (
    <div className="final"  > <br/>
    <h1 className="header"> STUDENT ROOM ALLOCATION BRANCH WISE</h1>
   <br/>
    <MDBBtn color="dark" ><h5><Link to="/" style={{ color: '#FFF' }}><strong>BACK TO HOME</strong> </Link></h5> </MDBBtn>
    &nbsp; &nbsp; &nbsp;
   <MDBBtn color="dark" ><h5><Link to="/faculty" style={{ color: '#FFF' }}><strong>PREVIOUS PAGE</strong> </Link></h5> </MDBBtn>
   <br/><br/>
    <h1>CSE</h1>
<Table striped bordered hover variant="dark">
<thead>
    <tr>
      <th><h3>FROM</h3></th>
      <th><h3>TO</h3></th>
      <th><h3>ROOM</h3></th>
    </tr></thead>
    <tbody>
{
  cses.map((numList,i) =>(
           <tr key={i}>
           <th> {numList}
            </th>
   
<th>{m[i]}</th>
          
         <th>  {csers[i]} 
         </th>
           </tr>
        ))
   }
   
    
  </tbody>
</Table>
<h1>ECE</h1>
<Table striped bordered hover variant="dark">
<thead>
    
    <tr>
      <th><h3>FROM</h3></th>
      <th><h3>TO</h3></th>
      <th><h3>ROOM</h3></th>
    </tr></thead>
    <tbody>
{
  eces.map((numList,i) =>(
           <tr key={i}>
           <th> {numList}
            </th>
   
<th>{me[i]}</th>
          
         <th>  {ecers[i]} 
         </th>
           </tr>
        ))
   }
   
    
  </tbody>
</Table>

 <h1>MECHANICAL</h1>

 <Table striped bordered hover variant="dark">
<thead>
    
    <tr>
      <th><h3>FROM</h3></th>
      <th><h3>TO</h3></th>
      <th><h3>ROOM</h3></th>
    </tr></thead>
    <tbody>
{
  mechs.map((numList,i) =>(
           <tr key={i}>
           <th> {numList}
            </th>
   
<th>{mer[i]}</th>
          
         <th>  {mechrs[i]} 
         </th>
           </tr>
        ))
   }
   
 </tbody>
</Table>


 <h1>CST</h1>
<Table striped bordered hover variant="dark">
<thead>
    
    <tr>
      <th><h3>FROM</h3></th>
      <th><h3>TO</h3></th>
      <th><h3>ROOM</h3></th>
    </tr></thead>
    <tbody>
{
  csts.map((numList,i) =>(
           <tr key={i}>
           <th> {numList}
            </th>
   
<th>{mern[i]}</th>
          
         <th>  {mechrs[i]} 
         </th>
           </tr>
        ))
   }
   </tbody>
</Table>
</div>
  )
}

export default Final

  