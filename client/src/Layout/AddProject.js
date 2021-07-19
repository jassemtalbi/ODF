import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
function AddProject() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [event, setevent] = useState("");
  //const [image, setimage] = useState("");
  const [filename,setfilename]=useState('');
  let history = useHistory();
const onChangeFile=e=>{
  setfilename(e.target.files[0]);
}

const contactus = (e) => {
  const formData=new FormData();
  formData.append('title',title)
  formData.append('description',description)
  formData.append('event',event)
  formData.append('image',filename)
  Axios.post("http://localhost:5000/user/addproject", formData).then((response) => {
   console.log(response);
   //window.location.reload();
console.log(formData)
});
};
  return (
    <div>
    <div>
    <div class="page-heading add-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4>Add Project</h4>
              <h2>let’s add new Project</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
    </div>
     <div>
   
 
    
     
     <div class="send-message">
       <div class="container">
         <div class="row">
           <div class="col-md-12">
             <div class="section-heading">
               <h2>Add a new Project</h2>
             </div>
           </div>
           <div class="col-md-8">
             <div class="contact-form">
             <form onSubmit={contactus} encType='multipart/form-data'>
             <div class="row">
                   <div class="col-lg-12 col-md-12 col-sm-12">
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" onChange={e=>settitle(e.target.value)} className="form-control" placeholder="title"/>
    </div>
    <div className="form-group">
      <label htmlFor="eventname">EventName</label>
      <input type="text" onChange={e=>setevent(e.target.value)} className="form-control"  placeholder="Event Name"/>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" onChange={e=>setdescription(e.target.value)}  rows="3"></textarea>
  </div>
  <div class="form-group">
    <label htmlFor="file">image</label>
    <input type='file' filename='image' class="form-control-file"  onChange={onChangeFile}></input>
  </div>
  <button type="submit" id="form-submit" class="filled-button">add Project</button>
    </div>
                 </div>
  </form>


             </div>
           </div>
           
         </div>
       </div>
     </div>
     <br></br>
     </div>
     </div>
  )
}

export default AddProject;

