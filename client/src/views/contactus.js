import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Layout/Footer";
import Contact from "../Layout/Contactus";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";

function contactus() {

  return (
 <>
 <Nav></Nav>
<Contact></Contact>
<Chatbox></Chatbox>

<Footer></Footer>
 </>
  )
}

export default contactus;
