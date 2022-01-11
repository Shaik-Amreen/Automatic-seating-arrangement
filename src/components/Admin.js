import React,{useState,useEffect} from 'react';
import  { ReactExcel, readFile, generateObjects} from '@ramonak/react-excel';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment'
import Modal from 'react-bootstrap/Modal'

function Admin() {
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});const [str,setstr]=useState(0)
  const [part,setpart]=useState(0);const [newd,setnewd]=useState([]);const [yearup,setyearup]=useState('')
  const [data,setdata]=useState([]);const [confirm,setconfirm]=useState(false)
  const [page,setpage]=useState(0);const [year,setyear]=useState(0);const [branch,setbranch]=useState('');
  const [date,setdate]=useState('');
let academic=[],strength=[];
  useEffect(() => {

}, [])
     
    
   

  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file 
    readFile(file)
      .then((readedData) =>(setInitialData(readedData)))
      .catch((error) => console.error(error));
    
  };




const add=()=>{
setpage(2);  
axios.get('http://localhost:4000/presentexam/strength')
.then((res) => {
strength.push(...res.data)
setstr(strength);
}).catch((err) => {
  console.log(err);});
}


const add1=()=>{
  setpage(3)
  axios.get('http://localhost:4000/exam')
  .then((res) => {
academic.push(...res.data)
console.log(academic)
 setdata(academic);
}).catch((err) => {
    console.log(err);});
}


  const save = () => {
    setpage(4.5)
    const result = generateObjects(currentSheet);
axios.post('http://localhost:4000/student/insertdata',result)
               .then((res) => {
          if(res.data.length===result.length||res.data===1){setpage(5.5)}
               }).catch((error) => {
                   console.log(error)
               });
setInitialData(undefined);setCurrentSheet({})
    };
   


const updateyear1=()=>{
  console.log("successs")
  
  axios.put('http://localhost:4000/student/updatea',{year:"2"})
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            setconfirm(false)
}

const updateyear2=()=>{
  console.log("successs2")
  axios.put('http://localhost:4000/student/updateb',{year:"3"})
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            }); setconfirm(false)
}

const updateyear3=()=>{
  console.log("successs3")
  axios.put('http://localhost:4000/student/updatec',{year:"4"})
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            }); setconfirm(false)
}
const updateyear4=()=>{
  console.log("successs4")
  axios.put('http://localhost:4000/student/updated',{year:"passout"})
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            }); setconfirm(false)
}




    const saverooms = () => {
  const result = generateObjects(currentSheet);
  let k=0;
  newd.map(e=>str.map(ed=>(e.examdepartment===ed.branch && e.year===ed.year)?++k:null));
  if(k/24<=result.length){
axios.post('http://localhost:4000/rooms/insertrooms', result)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
setpage(4)}else{alert("no sufficent rooms");}
setInitialData(undefined);setCurrentSheet({})
  };


  const saveexams = () => {
   const result = generateObjects(currentSheet);
   result.map(e=>{
     e.examdate=e.examdate.toString();
    e.examdate=moment(e.examdate.replace('/','-'), 'DD.MM.YYYY')
    e.examdate=new Date(e.examdate)
   })
setpage(4.5)
    axios.post('http://localhost:4000/exam/insertexams',result)
              .then((res) => {
                if(res.data===1||res.data.length===result.length){
                  setpage(7);academic=[]
                  axios.get('http://localhost:4000/exam')
                  .then((res) => {
                academic.push(...res.data)
                console.log(academic)
                 setdata(academic);
               }).catch((err) => {
                    console.log(err);});}
}).catch((error) => {
                  console.log(error)
              });

  setInitialData(undefined);setCurrentSheet({})
    };




    const getac =()=>{

     axios.post('http://localhost:4000/rooms/delete',{})
      .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });    
 
    const userObject = {
      date:date,
      session:document.getElementById('session').value
   };
   let newdata=data.filter(e=>(new Date(e.examdate).getFullYear()+new Date(e.examdate).getMonth()+new Date(e.examdate).getDate()+e.examsession)===
     (new Date(date).getFullYear()+new Date(date).getMonth()+new Date(date).getDate()+(document.getElementById('session').value))); 
    console.log(newdata)
     setnewd(newdata);
    axios.post('http://localhost:4000/presentexam/insertpredata',userObject)
    .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });
     
   
    }

    const nochange=()=>{setconfirm(false)}

/*
fetch('/testdata/studentdata', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});*/

   /*const arr={name:'keerthana',age:'cse'}
   axios.post('/testdata/studentdata',{name:'keerthana',age:'cse'})
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    //save array of objects to backend
   /* 
 
  fetch('/testdata/studentdata', {
        method: 'POST',
     
        body: arr
    })
    .then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
 
    <div class="form-inline justify-content-center">
    <strong>SELECT YEAR</strong>&nbsp;&nbsp;&nbsp;
      <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"
   onClick={()=>{setyear(1)}}/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"
  onClick={()=>{setyear(2)}}/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
  onClick={()=>{setyear(3)}}/>
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"
   onClick={()=>{setyear(4)}}/>
  <label class="form-check-label" for="inlineRadio4">4</label>
</div>
&nbsp;&nbsp;
 <strong>SELECT SEMESTER</strong> &nbsp;&nbsp;
<select id="sem" class="form-control" style={{width:"10%",borderRadius:"0px"}}>
<option value="1">1</option>
<option value="2">2</option>
</select>
  
    </div>
<br/>
<div class="form-inline justify-content-center">
<strong> SELECT REGULATION </strong>&nbsp;&nbsp;
<select class="form-control"  id="reg" style={{width:"10%",borderRadius:"0px"}}>
{regulation.map((e)=>(
<option value={e}>{e}</option>

))
  }</select>
  </div>


<br/>
<div class="form-inline justify-content-center">
<strong> DATE  </strong>&nbsp;&nbsp;<input class="form-control" type="date" style={{width:"20%",borderRadius:"0px"}} 
onChange={(e)=>{setdate(e.target.value)}}/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>SESSION  </strong>&nbsp;&nbsp;<select id="NOON" class="form-control" style={{width:"10%",borderRadius:"0px"}}>
<option value="am">AM</option>
<option value="pm">PM</option>
</select>
  </div> 






{(year==1)?
  <div><br/>
    <div class="form-inline justify-content-center">
    {branchn.map((e)=>(
            <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value={e}
  onClick={()=>(setbranch(e))}/>
  <label class="form-check-label" for="inlineRadio5">{e}</label>
</div>
    ))
    
    }
</div><br/>
{(branch!=='')?<div class="form-inline justify-content-center">
<select class="form-control"  id={1} style={{width:"30%",borderRadius:"0px"}}>
{data.map((e)=>(
  (branch===e.branch && e.year=="1" && document.getElementById("reg").value===e.regulation)?
<option value={e.coursecode}>{e.coursecode} {e.coursename}</option>
:null
  ))
  }</select></div>:null}
</div>

      :null}
  



{(year==2)?
  <div><br/>
    <div class="form-inline justify-content-center">
    {branchn.map((e)=>(
            <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value={e}
  onClick={()=>(setbranch(e))}/>
  <label class="form-check-label" for="inlineRadio6">{e}</label>
</div>
    ))
    
    }
</div><br/>
{(branch!=='')?<div class="form-inline justify-content-center">
<select class="form-control"  id={2} style={{width:"30%",borderRadius:"0px"}}>
{data.map((e)=>(
  (branch===e.branch && e.year==="2" && document.getElementById("reg").value===e.regulation)?
<option value={e.coursecode}>{e.coursecode} {e.coursename}</option>
:null
  ))
  }</select></div>:null}
</div>

      :null}





      {(year==3)?
        <div><br/>
          <div class="form-inline justify-content-center">
          {branchn.map((e)=>(
                  <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value={e}
        onClick={()=>(setbranch(e))}/>
        <label class="form-check-label" for="inlineRadio7">{e}</label>
      </div>
          ))
          
          }
      </div><br/>
      {(branch!=='')?<div class="form-inline justify-content-center">
      <select class="form-control"  id={3} style={{width:"30%",borderRadius:"0px"}}>
      {data.map((e)=>(
        (branch===e.branch && e.year=="3" && document.getElementById("reg").value===e.regulation)?
      <option value={e.coursecode}>{e.coursecode} {e.coursename}</option>
      :null
        ))
        }</select></div>:null}
      </div>
      
            :null}





            {(year==4)?
              <div><br/>
                <div class="form-inline justify-content-center">
                {branchn.map((e)=>(
                        <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value={e}
              onClick={()=>(setbranch(e))}/>
              <label class="form-check-label" for="inlineRadio8">{e}</label>
            </div>
                ))
                
                }
            </div><br/>
            {(branch!=='')?<div class="form-inline justify-content-center">
            <select class="form-control"  id={4} style={{width:"30%",borderRadius:"0px"}}>
            {data.map((e)=>(
              (branch===e.branch && e.year=="4" && document.getElementById("reg").value===e.regulation)?
            <option value={e.coursecode}>{e.coursecode} {e.coursename}</option>
            :null
              ))
              }</select>
             
              </div>:null}
            </div>
            
                  :null}   
    
  <br/>
    
    {(branch!=='' && date!=='')?<div class="form-inline justify-content-center">
      <button class="form-control" data-toggle="modal" onClick={()=>(setproceed(true),
       setnoon(document.getElementById("NOON").value),setcoursecode(document.getElementById(year).value))} 
       style={{width:"15%",borderRadius:"0px",background:"#0c2478",color:"white"}}>
      Proceed</button>
    
      
    </div>:null}
  
   
    <Modal show={proceed} onHide={close} >
    <div style={{padding:"2%",textAlign:"center"}}>
      Conduct {coursename} {coursecode} exam on {date} {noon} for {year} year of {branch} branch {regulation} regulation
      <br/><br/>
      <div class="form-inline justify-content-center">
      <button style={{background:"#0c2478",color:"white"}}  onClick={savepro}>SAVE</button>&nbsp;&nbsp;&nbsp;
      <button style={{background:"#0c2478",color:"white"}}  onClick={close}>CLOSE</button>
      </div>
    </div>
    </Modal>



*/
 

  return (
    <div>
      <br/><span style={{float:"right",paddingRight:"2%"}}><Link to ="/client" style={{color:"red",fontSize:"25px",fontWeight:"700",alignContent:"right"}}>LOGOUT</Link></span>
      <span style={{textAlign:"center",color:"#0c2478"}}>
     <h1>MADANAPALLE INSITITUE OF SCIENCE AND TECHNOLOGY</h1>
       <h2>UGC AUTONOMOUS</h2></span><br/>
       <div class="form-inline justify-content-center">
       <button class="form-control" onClick={()=>{setpage(1)}} style={{background:"#000249",color:"white"}}>ADD STUDENT DATA TO DATABASE</button>
       <button  class="form-control" onClick={add} style={{background:"#000249",color:"white"}}>SCHEDULE EXAM</button>
       <button  class="form-control" onClick={()=>{setpage(6)}} style={{background:"#000249",color:"white"}}>UPDATE STUDENTS</button>
       </div><br/>
       {(page==1)?<>
     <div class="form-inline justify-content-center">
    <strong> Upload Excel Of Student Data</strong>
      <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
        validate
        class="form-control" style={{border:"none"}}
        onClick={e => (e.target.value = null)}
      />
    
    {(initialData!==undefined)?<>
    <button onClick={save} class="btn btn-primary" style={{padding:"0.5%"}}>
        <strong>  Save to DATABASE
</strong></button>
      <table class="table table-striped form-inline justify-content-center">
      <ReactExcel 
        initialData={initialData}
        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      </table></>:null
    }
    </div></>:null}



{(page===6)?<>
<br/><br/>
<button class="form-control"  onClick={()=>(setconfirm(true),setyearup('1'))} style={{background:"#e9ebed",width:"30%",borderRadius:"0px",color:"#000249",fontWeight:"700"}} >Promote 1 years</button><br/>
<button class="form-control"  onClick={()=>(setconfirm(true),setyearup('2'))} style={{background:"#e9ebed",width:"30%",borderRadius:"0px",color:"#000249",fontWeight:"700"}} >Promote 2 years</button><br/>
<button class="form-control"  onClick={()=>(setconfirm(true),setyearup('3'))} style={{background:"#e9ebed",width:"30%",borderRadius:"0px",color:"#000249",fontWeight:"700"}} >Promote 3 years</button><br/>
<button class="form-control"  onClick={()=>(setconfirm(true),setyearup('4'))} style={{background:"#e9ebed",width:"30%",borderRadius:"0px",color:"#000249",fontWeight:"700"}} >Promote 4 years</button><br/>

{(yearup==='1')?
<Modal show={confirm} onHide={nochange} ><br/><div class="form-inline justify-content-center">
Are you sure to Promote 1 year ?</div><br/>
<div class="form-inline justify-content-center">
<button class="btn btn-primary" style={{width:"30%"}} onClick={updateyear1}>Yes</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-danger"  style={{width:"30%"}} onClick={nochange}>No</button>
</div><br/>
</Modal>:null}
{(yearup==='2')?
<Modal show={confirm} onHide={nochange} ><br/><div class="form-inline justify-content-center">
Are you sure to Promote 2 year ?</div><br/>
<div class="form-inline justify-content-center">
<button class="btn btn-primary" style={{width:"30%"}} onClick={updateyear2}>Yes</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-danger" style={{width:"30%"}} onClick={nochange}>No</button>
</div><br/>
</Modal>:null}
{(yearup==='3')?
<Modal show={confirm} onHide={nochange} ><br/><div class="form-inline justify-content-center">
Are you sure to Promote 3 year ?</div><br/>
<div class="form-inline justify-content-center">
<button class="btn btn-primary" style={{width:"30%"}} onClick={updateyear3}>Yes</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-danger" style={{width:"30%"}} onClick={nochange}>No</button>
</div><br/>
</Modal>:null}
{(yearup==='4')?
<Modal show={confirm} onHide={nochange} ><br/><div class="form-inline justify-content-center">
Are you sure to Promote 4 year ?</div><br/>
<div class="form-inline justify-content-center">
<button class="btn btn-primary" style={{width:"30%"}} onClick={updateyear4}>Yes</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-danger" style={{width:"30%"}} onClick={nochange}>No</button>
</div><br/>
</Modal>:null}
</>:null}



















{(page===5.5)?<div class="form-inline justify-content-center" style={{color:"#000249"}}>
<h6>Succesfully Saved</h6></div>:null}



{(page===4.5)?<div class="form-inline justify-content-center" style={{color:"#000249"}}>
<h6>Processing</h6></div>:null}

{(page===5)?<><div class="form-inline justify-content-center" style={{fontHeight:"50px",color:"#000249"}}>
Succesfully Saved</div><div class="form-inline justify-content-center">
<button onClick={add1} style={{background:"#10133f",color:"white",padding:"0.3%"}}>Proceed</button></div></>:null}

{(page===7)?<><div class="form-inline justify-content-center" style={{color:"#000249"}}>
<h6>Succesfully Saved</h6></div>
<div class="form-inline justify-content-center">
<button onClick={add1} style={{background:"#10133f",color:"white",padding:"0.3%"}}>Proceed</button></div>
</>:null}
   
   
    {(page==2)?
      <>
     <div class="form-inline justify-content-center">
     <button class="form-control" onClick={()=>(setpart(1),setInitialData(undefined),setCurrentSheet({}))} style={{background:"	#e9ebed",borderRadius:"0px",color:"#000249",fontWeight:"700"}}>ADD Exam Timetable</button>
      
       
    </div><br/>
    {(part===1)?
   <div class="form-inline justify-content-center">
   <strong> Upload Excel Of Exam Timetable</strong>
     <input
       type='file'
       accept='.xlsx'
       onChange={handleUpload}
       validate
       onClick={e => (e.target.value = null)}
       class="form-control" style={{border:"none"}}
     />
   
   {(initialData!==undefined)?<>
   <button onClick={saveexams} class="btn btn-primary" style={{padding:"0.5%"}}>
       <strong>  Save to DATABASE
</strong></button>
     <table class="table table-striped form-inline justify-content-center">
     <ReactExcel 
        initialData={initialData}
        onSheetUpdate={(currentSheet) => {setCurrentSheet(currentSheet)}}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
     </table></>:null
   }
   </div>:null}
{(page!==4.5)?<div class="form-inline justify-content-center">
<button onClick={add1} style={{background:"#10133f",color:"white",padding:"0.3%"}}>Proceed</button></div>:null}

    </>
:null}


{(page==3)?<>
<div class="form-inline justify-content-center">
<strong> DATE  </strong>&nbsp;&nbsp;<input class="form-control" type="date" style={{width:"20%",borderRadius:"0px"}} 
onChange={(e)=>{setdate(e.target.value)}}/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>SESSION  </strong>&nbsp;&nbsp;<select id='session' class="form-control" style={{width:"10%",borderRadius:"0px"}}>
<option value="AM">AM</option>
<option value="PM">PM</option>
</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button style={{background:"#000249",color:"white"}} onClick={getac}>GET</button>
  </div> <br/>{console.log(newd)}
{(newd.length!==0)?<>
 <table class="table table-bordered" style={{textAlign:"center"}}><thead><th>Department</th><th>Course</th></thead>
 {newd.map(e=>(
   <tbody><tr><td>{e.examdepartment}</td><td>{e.examname}</td></tr></tbody>
 ))}
   </table><br/>
   <span class="form-inline justify-content-center">
  <button  class="form-control"  onClick={()=>(setpart(2),setInitialData(undefined),setCurrentSheet({}))} style={{background:"#e9ebed",borderRadius:"0px",color:"#000249",fontWeight:"700"}}>Add available rooms</button>
 </span><br/>
  {(part==2)?<>
<div class="form-inline justify-content-center">
    <strong> Upload Excel Of Available Rooms</strong>
      <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
        onClick={e => (e.target.value = null)}
        validate
        class="form-control" style={{border:"none"}}
      />
    {(initialData!==undefined)?<>
    <button onClick={saverooms} class="btn btn-primary" style={{padding:"0.5%"}}>
        <strong>  Save to DATABASE
</strong></button>
{console.log(currentSheet)}
      <table class="table table-striped form-inline justify-content-center">
      <ReactExcel 
        initialData={initialData}
        onSheetUpdate={(currentSheet) => {setCurrentSheet(currentSheet)}}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      </table></>:null
    }
    </div>
</>
:null}<br/></>:"NOT SELECTED"}
 
  </>:null}

   {(page===4)?<div class="form-inline justify-content-center">
  <Link to="/faculty"><strong>Proceed for allotment</strong> </Link><br/></div>:null}
   <br/> 



    </div>
  );
}
export default Admin;









{/*
npm init
npm install
 db folder
    db.js--mongoose
 models
     structure of collection
 controllers+routers=controllers
     query+link
  
 index.js
   controllers
   db.js
 controllers
   models
*/}