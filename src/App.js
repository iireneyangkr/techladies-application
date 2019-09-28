import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./layout/Home"
import About from "./layout/About"
import Contact from "./layout/Contact"
import Navbar from "./component/navbar"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}