import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Layout/Footer";
import Project from "../Layout/Project";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";

function aboutus() {

  return (<>

      <Nav></Nav>
      <Project></Project>
    <Chatbox></Chatbox>
      <Footer></Footer> 
      </>
  )
}

export default aboutus;
