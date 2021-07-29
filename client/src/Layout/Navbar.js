import { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Navbar() {
  var local = localStorage.getItem("Data");
  if (local !== "undefined" && local !== null) {
    const decode = jwt_decode(local);
    var Username = decode.username;
    var id = decode._id;
    var role=decode.role
  } else {
    //  history.push("/");
    console.log("mat3adash");
    //history.push('/')
  } 
  const logout=()=>{

    localStorage.removeItem('Data');
 

 }
 if(role == "admin")
 {
  return (
    <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
      <a href='/' class="sign_btn">  <img src='assets/images/odf.png' width='150' height='50'></img></a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home
                <span class="sr-only">(current)</span>

              </a>
              
            </li> 
            <li class="nav-item">
              <Link to ="/project" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Project</Link>

            </li>
            <li class="nav-item">
            <a class="nav-link" href="/aboutus">About Us</a>
            </li>
            <li class="nav-item">
              <Link to ="/contactus" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Contact Us</Link>

            </li>
            <li class="nav-item">
              <Link to ="/addproject" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">add Project</Link>

            </li>
            <li class="nav-item">
            <Link to ="/addnewsletter" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Send newsletter</Link>
            </li>
            <li class="nav-item">
            <div class="sign_btn" onClick={logout}><a href="/login">logout</a></div>

            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
 }
  if (local !== "undefined" && local !== null) {
 
  return (
    <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
      <a href='/' class="sign_btn">  <img src='assets/images/odf.png' width='150' height='50'></img></a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <a class="nav-link" href="/">Home
                <span class="sr-only">(current)</span>

              </a>
              
            </li> 
            <li class="nav-item">
              <Link to ="/project" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Project</Link>

            </li>
            <li class="nav-item">
            <a class="nav-link" href="/aboutus">About Us</a>
            </li>
            <li class="nav-item">
              <Link to ="/contactus" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Contact Us</Link>

            </li>
            
            <li class="nav-item">
            <div class="sign_btn" onClick={logout}><a href="/register">logout</a></div>

            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

else{
  return (
    <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
      <a href='/' class="sign_btn">  <img src='assets/images/odf.png' width='150' height='50'></img></a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <a class="nav-link" href="/">Home
                <span class="sr-only">(current)</span>

              </a>
              
            </li> 
            <li class="nav-item">
              <Link to ="/project" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Project</Link>

            </li>
            <li class="nav-item">
            <a class="nav-link" href="/aboutus">About Us</a>
            </li>
            <li class="nav-item">
              <Link to ="/contactus" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">Contact Us</Link>

            </li>
         
           
            <li class="nav-item">
            <div class="sign_btn" ><a href="/login">Sign in</a></div>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}
}
export default Navbar;
