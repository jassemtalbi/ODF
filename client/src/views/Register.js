import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import Axios from "axios";
function Register() {
  var local = localStorage.getItem("Data");
  if (local !== "undefined" && local !== null) {
    const decode = jwt_decode(local);
    var Username = decode.username;
    var id = decode._id;
  } else {
    //  history.push("/");
    console.log("mat3adash");
    //history.push('/')
  }

  const [usernameR, setUsername] = useState("");
  const [passwordR, setPassword] = useState("");
  const [lastnameR, setlastname] = useState("");
  const [firstnameR, setfirstname] = useState("");
  const [emailR, setemail] = useState("");
  const [userList, setuserList] = useState([]);
  let history = useHistory();

  const register = (e) => {
    Axios.post("http://localhost:5000/user/register/", {
      username: usernameR,
      password: passwordR,
      email: emailR,
      lastname: lastnameR,
      firstname: firstnameR,
    }).then((response) => {
      localStorage.setItem("Data", response.data.data);
      var getlocal = localStorage.getItem("Data");

      if (getlocal !== "undefined" && getlocal !== null) {
        console.log("t3ada");
        history.push("/");

      } else {
        console.log("mat3adash");
        history.push("/register");
        alert("register invalid");
      }

      window.location.reload();
    });
    history.push("/register");
  };
  useEffect(() => {
   
  }, []);

  return (
    <body>
    <main >
      <div class="container">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-5">
              <img src="assets/images/login.jpg" alt="login" class="login-card-img"/>
            </div>
            <div >
              <div class="card-body">
                <div class="brand-wrapper">
                  <img src="assets/images/odf.png" alt="logo" class="logo"/>
                </div>
                <p class="login-card-description">sign up</p>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">username</label>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    id="firstname"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    placeholder="Enter username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    class="form-control"
                    id="firstname"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setfirstname(e.target.value);
                    }}
                    placeholder="Enter Firstname"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    class="form-control"
                    id="lastname"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setlastname(e.target.value);
                    }}
                    placeholder="Enter Lastname"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter Password"
                  />
                </div>
               
                <a href='/login'>already have an account </a>
<br></br>
      <div class="contents order-2 order-md-1">
  <br></br>
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
          
          <div class="col-md-8">
            <div class="contact-form">
                <div class="row">

                  <div class="col-lg-12">
                    <fieldset>
                      
                      <button type="submit" id="form-submit" class="filled-button" onClick={register}  >Register</button>
                      
                                 </fieldset>
                   
                  </div>
                </div>
            
         
        </div>
      </div>
  
  
            </div>
          </div>
        </div>
  
      
    </div>
      
      
  
    
    
                 
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </body>
  );
}
export default Register;
