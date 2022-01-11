import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link,Redirect,withRouter} from 'react-router-dom'
import image from "./customer_logo.jpg";
import img from './admin.jpg'
function Userlogin() {
   
     const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const[data,setdata]=useState([]);const user=[];
    const [valid,setValid]=useState(false)
    useEffect(() => {
        axios.get('http://localhost:4000/users')
        .then((res) => {
           
         user.push( res.data)
       setdata(user);
     }).catch((err) => {
          console.log(err);});
          }, [])
          
    const handleSubmit=(e)=>{
        console.log(data,username,password);
     e.preventDefault()
     if(data[0].username===username && data[0].password===password)
     {setValid(true);}
     else{
        setpassword("");
        setusername("");
        setValid(false);
     }      
}
   
    return (
        
        <div style={{paddingTop:"3%"}}>
         <span style={{textAlign:"center",color:"#000249"}}><br/>
       <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/>
        <div class="d-flex justify-content-center">
        <div className="card" style={{width:"50%",borderRadius:"0px"}} >
        <div className="row">
        <div className="col form-inline justify-content-center"  style={{paddingTop:"3%"}}>
        <img src={image}  alt="CAS" height="280px"></img>
     
        </div>
        <div className="col">
        
            <form onSubmit={(e)=>handleSubmit(e)}>
            <h3 style={{textAlign:"left",color:"grey",paddingTop:"12%"}}>Sign in</h3>
            <div className=" container-fluid" >
   
    <br/>

    <input  className="form-control"  type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="User Name"></input><br/>
    <input className="form-control "  type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password"></input><br/>
    <button class="form-control" style={{fontWeight:700,width:"40%",background:"#07115c",color:"white",borderRadius:"0px"}} type="submit">LOGIN</button>
                <br/><br/>
                
                      
                </div>
            </form>
            
</div>        
          </div>
          
<br/>
        </div>
        
</div>
{(valid===true)?<Redirect to={
            
       { pathname: "/admin"
    }

}/>:<>   <br/><br/> <div className="alert-danger"  style={{textAlign:"center"}}role="alert"> Not Loggged </div>
<div style={{paddingBottom:"3%"}}>  </div></>
}
</div>
      
    )
}

export default Userlogin;