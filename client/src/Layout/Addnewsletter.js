import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Addnewsletter() {
  const [subject, setsubject] = useState("");
  const [text, settext] = useState("");
  let history = useHistory();

  const contactus = (e) => {
    Axios.post("http://localhost:5000/user/newsletter", {
      subject: subject,
      text: text,
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
                <form onSubmit={contactus} encType="multipart/form-data">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="title">Subject</label>
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
                </form>
              </div>
            </div>

            <div class="col-md-4">
              <ul class="accordion">
                <li>
                  <h4>Newsletter</h4>
                  <div >
                    <p>
                    electronic document containing information about the recent activities of an organization, sent regularly to the organization's members
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Addnewsletter;
