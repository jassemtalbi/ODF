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
            <h4>Best Offer</h4>
            <h2>New Arrivals On Sale</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h4>Last Minute</h4>
            <h2>Grab last minute deals</h2>
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
              <img src="assets/images/feature-image.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="filters">
          <li class="nav-item">
            <a class="nav-link" href="#aboutus">Aboutm Us</a>
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

<div class="row mt-30">
                {userList.map((val, key) => {
                  return (
                    <div class="col-sm-12 col-lg-4 col-md-6">
                       <div class="product-item">
                        <a href="#"><img src={`/uploads/${val.image}`} alt=""/></a>
                        <div class="down-content">
                          <a href="#"><h4>{val.title}</h4></a>
                          <a href="#"><h3>{val.event}</h3></a>

                          <p>{val.description}</p>
                          
                        </div>
                      </div>
                   
                </div>
                  );
                })}
    </div> 
    </div>
    </div>
   
   </section>
</div>
   </div>
 
  );
}

export default Afficherimmobilier;