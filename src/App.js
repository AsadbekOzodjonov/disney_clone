import React from "react";
import Header from './components/Header'
import Home from "./components/Home";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Detial from "./components/Detial";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detial />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
