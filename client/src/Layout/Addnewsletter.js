import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Addnewsletter() {
  const [subject, setsubject] = useState("");
  const [text, settext] = useState("");
  let history = useHistory();

const contactus = (e) => {
  Axios.post("http://localhost:5000/user/newsletter", {
    subject:subject,
    text:text,
  }).then((response) => {
   console.log(response);
   window.location.reload();
});
history.push("/");
window.location.reload();

};
  return (
    <div>
    <div class="page-heading news-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h2>what's new !!</h2>
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
              <h2>Send us a newsletter</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="contact-form">
              <form id="contact" action="" method="post">
                <div class="row">
                  
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject" required=""  onChange={(e) => {
                      setsubject(e.target.value);
                    }}/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""  onChange={(e) => {
                      settext(e.target.value);
                    }}></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="filled-button"  onClick={contactus}>Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
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

export default Addnewsletter;
