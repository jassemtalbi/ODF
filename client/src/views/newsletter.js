import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Layout/Footer";
import Newsletter from "../Layout/Addnewsletter";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";

function newsletter() {

  return (
 <>
 <Nav></Nav>
<Newsletter></Newsletter>
<Chatbox></Chatbox>

<Footer></Footer>
 </>
  )
}

export default newsletter;
