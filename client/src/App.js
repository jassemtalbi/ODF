import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import AboutUs from './views/aboutus'
import ContactUs from './views/contactus'
import Register from './views/Register'
import Project from './views/project'
import Login from './views/Login'
import AddProject from './views/addproject'
import Newsletter from './views/newsletter'
import Team from './views/team'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (<> 
    <div className="App">
    <>
    <BrowserRouter basename="/">
        <Switch>

        <Route exact  path="/" render={(props) => <Home {...props} />}></Route>
        <Route exact  path="/aboutus" render={(props) => <AboutUs {...props} />}></Route>
        <Route exact  path="/contactus" render={(props) => <ContactUs {...props} />}></Route>
        <Route exact  path="/register" render={(props) => <Register {...props} />}></Route>
        <Route exact  path="/project" render={(props) => <Project {...props} />}></Route>
        <Route exact  path="/login" render={(props) => <Login {...props} />}></Route>
        <Route exact  path="/team" render={(props) => <Team {...props} />}></Route>

        <Route exact  path="/addproject" render={(props) => <AddProject {...props} />}></Route>
        
        <Route exact  path="/addnewsletter" render={(props) => <Newsletter {...props} />}></Route>

        </Switch>
    </BrowserRouter>
    </>
    </div>
    </>
  );
}

export default App;
