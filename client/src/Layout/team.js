import { useState, useEffect } from "react";
import Axios from "axios";

function team() {

  return (
    
      <div>
    <div class="page-heading about-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            <h4>About ODF</h4>
            <br></br>
            <br></br>

            <h2>our Team Members</h2>
          </div>
        </div>
      </div>
    </div>
  </div>


 
  <div class="team-members">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Our Team Members</h2>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/nomeen.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/noomanefehri/"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="down-content">
              <h4>Noomane Fehri</h4>
              <span>Project Director</span>
              <p>Noomane@ourdigitalfuture.org</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/hamza.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/hamza-guizani-253ba855/"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="down-content">
              <h4>Hamza Guizani</h4>
              <span>Incubation manager</span>
              <p>hamza@ourdigitalfuture.org</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/Sophie.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/asophie/"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="down-content">
              <h4>Sophie Gombart Masmoudi</h4>
              <span>Head of Industrial Prototyping Unit</span>
              <p>sophie@technoriat.com</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Associate team member</h2>
          </div>
        </div>
        <div class="col-md-2">
          <div class="team-member">
            <div class="thumb-container">
              
            </div>
            <div class="down-content">
             
            </div>
          </div>
          </div>
         
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/b.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/nebil-chemek-3bb598b/"><i class="fa fa-linkedin"></i></a></li>
                   
                  </ul>
                </div>
              </div>
            </div>
        
            <div class="down-content">
              <h4>Nebil Chemek</h4>
              <span>PMO</span>
              <p>pmo@ourdigitalfuture.org</p>
            </div>
          </div>
        </div>
       
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/c.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/ramzi-zammali-98a19928/"><i class="fa fa-linkedin"></i></a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div class="down-content">
              <h4>Ramzi Zammali</h4>
              <span>Sourcing manager</span>
              <p>ramzi@technoriat.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  </div>

  )
}

export default team;