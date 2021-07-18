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
      url: "/user/googlelogin/",
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
    Axios.get(`/user/displayProfile/${id}/`)
      .then((res) => {
        setuserList(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <div id="first">
              <div class="myform form ">
                <div class="logo mb-3">
                  <div class="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-center">
                      By signing up you accept our <a href="#">Terms Of Use</a>
                    </p>
                  </div>
                  <div class="col-md-12 text-center ">
                    <button
                      class=" btn btn-block mybtn btn-primary tx-tfm"
                      type="submit"
                      id="button-addon3"
                      onClick={login}
                    >
                      login
                    </button>
                  </div>
                  <div class="col-md-12 ">
                    <div class="login-or">
                      <hr class="hr-or" />
                      <span class="span-or">or</span>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <p class="text-center">
                      <GoogleLogin
                        class="btn"
                        type="submit"
                        id="button-addon3"
                        clientId="672601858751-vhnn8mdk7d2r1j61vggtnmeljdqeliol.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </p>
                  </div>
                  <div class="form-group">
                    <p class="text-center">
                      Don't have account?{" "}
                      <a href="/register" id="signup">
                        Sign up here
                      </a>
                    </p>
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