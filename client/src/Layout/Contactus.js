import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Contactus() {
  const [fullname, setfullname] = useState("");
  const [subject, setsubject] = useState("");
  const [text, settext] = useState("");
  const [email, setemail] = useState("");
  let history = useHistory();

const contactus = (e) => {
  Axios.post("http://localhost:5000/user/Contactus", {
    fullname: fullname,
    subject:subject,
    text:text,
    email:email,
  }).then((response) => {
   console.log(response);
   window.location.reload();

});
history.push("/");
window.location.reload();

};
  return (
    <div>
    <div class="page-heading contact-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h2>let’s get in touch</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="find-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our Location on Maps</h2>
            </div>
          </div>
          <div class="col-md-8">

            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6387.147273202429!2d10.185379500056303!3d36.828735571052135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1627640571240!5m2!1sfr!2stn" width="100%" height="330px" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-md-4">
            <div class="left-content">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

              <h4>17 street ibn charaf Belvedère, Tunis</h4>
              <h5>Contact@ourdigitalfuture.org</h5>
              <h5>55799889</h5>



             
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="send-message">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Send us a Message</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="contact-form">
            <form onSubmit={contactus} encType="multipart/form-data">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="title">Fullname</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setfullname(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Fullname"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="eventname">Email</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="eventname">Subject</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setsubject(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="eventname">Message</label>
                        <textarea
                          type="text"
                          onChange={(e) => {
                            settext(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Message"
                          required
                        />
                      </div>
                      <br></br>
                      <button
                        type="submit"
                        id="form-submit"
                        class="filled-button"
                      >
                        Send Message
                      </button>
                     
                    </div>
                  </div>
                </form>         </div>
          </div>
          <div class="col-md-4">
            <ul class="accordion">
              <li>
                  <a>Accordion Title One</a>
                  <div class="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    </div>
  )
}

export default Contactus;
