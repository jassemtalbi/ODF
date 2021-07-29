import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

import Axios from "axios";
function Login() {
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

  const [usernamel, setUsername] = useState("");
  const [passwordl, setPassword] = useState("");
  const [userList, setuserList] = useState([]);
  let history = useHistory();

  const responseSuccessGoogle = (response) => {
    console.log(response);
    Axios({
      method: "POST",
      url: "http://localhost:5000/user/googlelogin/",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      localStorage.setItem("Data", response.data.data);
      const getlocal = localStorage.getItem("Data");

      if (getlocal !== "undefined" && getlocal !== null) {
        console.log("t3ada");
      } else {
        console.log("mat3adash");
      }
      // window.location.reload();
      history.push("/");
      window.location.reload();

      console.log("google login succes", response.data.data);
    });
  };

  const responseErrorGoogle = (response) => {};
  const login = (e) => {
    Axios.post("http://localhost:5000/user/login/", {
      username: usernamel,
      password: passwordl,
    }).then((response) => {
      localStorage.setItem("Data", response.data.data);
      var getlocal = localStorage.getItem("Data");

      if (getlocal !== "undefined") {
        console.log("t3ada");
        history.push("/");

      } else {
        console.log("mat3adash");
        history.push("/login");
        alert("sorry account does not exist");
      }

      window.location.reload();
    });
    history.push("/login");
  };
  const logout = () => {
    localStorage.removeItem("Data");

    window.location.reload();
  };
  useEffect(() => {
   
  }, []);

  return (
    
    <body>
  
 
    <div class="d-lg-flex half">
      <div class="bg order-1 order-md-2" style={{ 
      backgroundImage: `url("assets/images/login.jpg")` }}></div>
      <div class="contents order-2 order-md-1">
  
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
            <div class="col-md-5">
              <img src="assets/images/odf.png" alt="login" />
            </div>
            <hr></hr>
              <h3>Login to <strong>ODF</strong></h3>
                <div class="form-group first">
                  <label for="username">Username</label>
                  <input type="text" class="form-control"  onChange={(e) => {
                        setUsername(e.target.value);
                      }} placeholder="your username" id="username"/>
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" onChange={(e) => {
                        setPassword(e.target.value);
                      }} placeholder="Your Password" id="password"/>
                </div>
                
                <a href='/register'>dosen't have an account !</a>
                 <br></br>
          <div class="col-md-8">
            <div class="contact-form">
                <div class="row">
                 
                  <div class="col-lg-12">
                    <fieldset>
                      
                      <button type="submit" id="form-submit" class="filled-button" onClick={login}  >Login</button>
                      
                      <span class="span-or">  - or -  </span>
                                    <GoogleLogin
                        class="btn"
                        type="submit"
                        id="button-addon3"
                        clientId="28167715721-dcopiok9t9bf2c48hacvvtn589qtdei0.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={"single_host_origin"}
                      /> </fieldset>
                   
                  </div>
                </div>
            
         
        </div>
      </div>
  
  
            </div>
          </div>
        </div>
      </div>
  
      
    </div>
      
      
  
    
    </body>
    
  );
}
export default Login;