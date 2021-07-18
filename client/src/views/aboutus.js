import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Layout/Footer";
import Aboutus from "../Layout/Aboutus";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";

function aboutus() {

  return (<>
      <Nav></Nav>
      <Aboutus></Aboutus>
      <Chatbox></Chatbox>
      <Footer></Footer>
      </>
  )
}

export default aboutus;
