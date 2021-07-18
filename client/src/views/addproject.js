import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../Layout/Footer";
import AddProject from "../Layout/AddProject";
import Nav from "../Layout/Navbar";
import Chatbox from "../Layout/Chatbox";
function addproject() {
  return (
 <>
 <Nav></Nav>
<AddProject></AddProject>
<Chatbox></Chatbox>

<Footer></Footer>
 </>
  )
}

export default addproject;
