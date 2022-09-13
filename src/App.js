import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/OurTeam";
import Products from "./components/pages/Projects";
import SignUp from "./components/pages/SignUp";
import AboutUs from "./components/pages/AboutUs";
import Projects from "./components/pages/Projects";
import OurTeam from "./components/pages/OurTeam";
import Partners from "./components/pages/Partners";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/projects" component={Projects} />
          <Route path="/ourTeam" component={OurTeam} />
          <Route path="/partners" component={Partners} />
          {/* <Route path="/sign-up" component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
