import { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";

function Afficherimmobilier() {
const [userList, setuserList] = useState([]);
const [filename,setfilename]=useState('');

  useEffect(() => {
    Axios.get("http://localhost:5000/user/AllProject/")
      .then((res) => {
        setuserList(res.data);
        console.log(setuserList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    
    <div>
   
<div class="banner header-text">
      <div class="owl-banner owl-carousel">
        <div class="banner-item-01">
          <div class="text-content">
            <h2>New challenge</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h2>Best Team</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h2>we communicate</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="best-features" id='aboutus'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our Digital Future at a glance</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-content">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h4>          ODF is a pan African consultancy firm specialized in:</h4>
              <ul class="featured-list">
                <li>Public policy development and appropriation</li>
                <li>Innovation ecosystems development</li>
                <li>Digital transformation</li>
               
              </ul>
              <a href="/aboutus" class="filled-button">Read More</a>

            </div>
          </div>
          <div class="col-md-6">
            <div class="right-image">
              <img src="assets/images/expliqué.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <hr></hr>
    <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="filters">
          <li class="nav-item">
            </li>
            <ul>
                <li class="active" data-filter="*">All Projects</li>
                
            </ul>
          </div>
        </div>
       </div>
       </div>
      
       <section class="services_area pt-115" id="about">
       <div class="container">
    <div class="product-grid-list">
    <div class="services">

<div class="row mt-30">
<div class="col-md-2">
  </div>
{userList.map((val, key) => {
                  return (
                    
                  <div class="col-md-4">
          <div class="service-item">
            <div class="icon">
            <a href="#"><img src={`/uploads/${val.image}`} width="475" height="130" alt=""/></a>

            </div>
            <div class="down-content">
            <h1><strong>{val.event}</strong></h1>
             <a href={`${val.title}`}> <h4><strong>{val.title}</strong></h4></a>
              <p><strong>{val.description}</strong></p>
            </div>
          </div>
          <hr></hr>
        </div>
                  );
                })}
    </div> 
    </div>
    </div>
  
    </div>
  
   
    </section>
</div>


   </div>

 
  );
}

export default Afficherimmobilier;