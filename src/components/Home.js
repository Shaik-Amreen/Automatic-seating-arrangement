import React from 'react';
import image from "./background.jpg";
import { Link } from 'react-router-dom';


const Home = () =>{
// style={{backgroundImage: `url(${image}`,height:"100vh"}}
 return(
   <div class="border border-primary" style={{backgroundImage:`url(${image}`,height:"100vh",
  }}><br/>
   <span style={{textAlign:"center",color:"white"}}><h1>MADANAPALLE INSITITUE OF  TECHNOLOGY AND SCIENCE</h1>
   <h2>UGC AUTONOMOUS</h2></span>
<br/><br/>
<span class="form-inline justify-content-center">
 <span class="card" style={{padding:"3%",width:"30%",background:"#e1f5fe",borderRadius:"0px"}}>

<div class="form-inline justify-content-center" >
   
      <Link to="/Student"><strong style={{color:"#00006f"}} >STUDENT</strong> </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       <Link to="/login"> <strong style={{color:"#00006f"}}>ADMIN</strong>  </Link> 
  </div>
</span>
</span>
  </div>
 )

} 

export default Home;