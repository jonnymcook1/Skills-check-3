import React, { Component } from 'react';
import Header from "./components/Header"
import './App.css';
import routes from "./routes"
import {HashRouter as Router} from "react-router-dom"



class App extends Component {
  render() {
    return (
     <Router>
     <div className="App">
     <Header />
     {routes}
     </div>
     </Router>
    );
  }
}

export default App;