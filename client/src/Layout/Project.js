import { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";

function Project() {

    const [userList, setuserList] = useState([]);
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
    <div class="page-heading products-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-content">
            <h4>our digital future</h4>
            <h2>Our Project</h2>
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
                {userList.map((val, key) => {
                  return (
                    
                  <div class="col-md-4">
          <div class="service-item">
            <div class="icon">
            <a href="#"><img src={`/uploads/${val.image}`} width="300" height="400" alt=""/></a>

            </div>
            <div class="down-content">
            <h3>{val.event}</h3>
              <h4>{val.title}</h4>
              <p>{val.description}</p>
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
    <div class="best-features">
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
   
    </section>
   </div>
               
 </div>
  );
}



export default Project;
