import { useState, useEffect } from "react";
import Axios from "axios";

function Aboutus() {

  return (
      <div>
    <div class="page-heading about-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            
            <h4>about us</h4>

            <h2>our company</h2>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="best-features about-features">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Our Background</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right-image">
            <img src="assets/images/feature-image.jpg" alt="" />
            

          </div>
        </div>
        
        <div class="col-md-6">
          <div class="left-content">
            <h4>Who we are  What we do?</h4>
            <ul>
                <li><h3>ODF is a pan African consultancy firm specialized in:</h3>

                      Public policy development and appropriation
                      <br/>

Innovation ecosystems development
<br/>

Digital transformation
<br/>
<hr/>
ODF is Founded in 2016 by senior internationally trusted specialists with
extensive global network with public and private sector experiences,

ODF uses a human centric participative approach to design and deliver
sustainable programs,</li>
<li>
ODF managing partners was responsible for the design and implemented
the following digital economy projects:

Legal framework:
<hr/>

</li>
            </ul>
            <ul class="social-icons">
              <li><a href="https://www.facebook.com/Ourdigitalfutureorg-100461435164303"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
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
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
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
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
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
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
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
        <div class="col-md-4">
          <div class="team-member">
            <div class="thumb-container">
              <img src="assets/images/b.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                   
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
              <img src="assets/images/a.jpg" alt=""/>
              <div class="hover-effect">
                <div class="hover-content">
                  <ul class="social-icons">
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div class="down-content">
              <h4>George Walker</h4>
              <span>Product Photographer</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
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
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    
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


  <div class="services">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="service-item">
            <div class="icon">
              <i class="fa fa-gear"></i>
            </div>
            <div class="down-content">
              <h4>Product Management</h4>
              <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
              <a href="#" class="filled-button">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <div class="icon">
              <i class="fa fa-gear"></i>
            </div>
            <div class="down-content">
              <h4>Customer Relations</h4>
              <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
              <a href="#" class="filled-button">Details</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <div class="icon">
              <i class="fa fa-gear"></i>
            </div>
            <div class="down-content">
              <h4>Global Collection</h4>
              <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
              <a href="#" class="filled-button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="happy-clients">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Happy Partners</h2>
          </div>
        </div>
        <div class="col-md-12">
          <div class="owl-clients owl-carousel">
            <div class="client-item">
              <img src="assets/images/cea.png" alt="1"/>
            </div>
            
            <div class="client-item">
              <img src="assets/images/innovi.png" alt="2"/>
            </div>
            
            <div class="client-item">
              <img src="assets/images/ministere.jpg" alt="3"/>
            </div>
            
            <div class="client-item">
              <img src="assets/images/expertise.jpg" alt="4"/>
            </div>
            <div class="client-item">
              <img src="assets/images/expertise.jpg" alt="4"/>
            </div>
            
            <div class="client-item">
              <img src="assets/images/ministere2.png" alt="5"/>
            </div>
            
            <div class="client-item">
              <img src="assets/images/client-01.png" alt="6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Aboutus;
