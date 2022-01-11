import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import img from './admin.jpg'
import { stat } from 'fs';


function Faculty() {
    let data=[],onway=[]; 
    const [arr,setarr]=useState([]);const [sent,setsent]=useState([]);const [status,setstatus]=useState(0)
    useEffect(() => {
        axios.get('http://localhost:4000/Stu')
        .then((res) => {
      data.push(...res.data)
      setarr(data)
     }).catch((err) => {
          console.log(err);});
}, [])
    const send = () => {  
          console.log(arr)
          setstatus(1)
          arr.map(e=>{
            axios.post('http://localhost:4000/gmail',{rollno:e.rollno,roomno:e.roomno})
            .then((res) => {
                console.log(res.data)
                onway.push(res.data);
                if(onway.length===arr.length){setstatus(2)}
            }).catch((error) => {
                console.log(error)
            });
          })
     
    
        };
       

    return (
        <div style={{backgroundImage:`url(${img}`,height:"100vh"}}>
       <span style={{textAlign:"center",color:"#000249"}}><br/>
       <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/><br/><br/>
           <div class="form-inline justify-content-center">
            <div className="card form-inline justify-content-center shadow p-3 mb-5 bg-white rounded" 
            style={{width:"30%",borderRadius:"0px"}}>
             <br/>
             <Link to="/branch"><strong>CHECK ACCORDING TO BRANCH</strong> </Link><br/>
              <Link to="/rooms"><strong>CHECK ACCORDING TO ROOMS</strong> </Link><br/>
              <Link to="/admin"><strong>BACK TO HOME</strong> </Link><br/>
              {(status===0)?
              <button class="form-control" onClick={send}style={{background:"white",color:"#000249"}}>
              SEND GMAIL</button>:(status===1)?<span style={{textAlign:"center"}}><h6 style={{color:"#000249"}}>SENDING</h6>
              <h6 style={{color:"crimson"}}>DO not Refresh</h6></span>:
              (status===2)?<h6 style={{color:"#000249"}}>Succesfully sent</h6>:null}
      
    </div>   
    </div>  
</div>
    )
}

export default Faculty
