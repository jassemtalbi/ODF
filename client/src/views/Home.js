import { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import Home from "../Layout/Afficherimmobilier";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";

function Afficherimmobilier() {

  return (
    
  <>
  <Nav></Nav>
  <Home></Home>
  <Chatbox></Chatbox>

  <Footer></Footer>
  </>

 
  );
}

export default Afficherimmobilier;