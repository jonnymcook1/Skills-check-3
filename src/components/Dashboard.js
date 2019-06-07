import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import store from "../redux/store";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      house: store.getState().house
    }
  }   
  

  componentDidMount() {
    axios
    .get(`http://localhost:5050/properties${this.props.match.params}`)
    .then(results =>{
      this.setState({house: results.data})
    })
  }

  deleteHouse(id) {
    axios
      .delete(`http://localhost:5050/api/properties/${id}`)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(() => {
        alert("error");
      });
  }

  
  
  render() {
    return (
      <div className="big-container">
      <div className="title">
        <h1 className="dash-heading">Dashboard</h1>
        <Link to="/wizard">
            <button className="add-property">Add New Property</button>
          </Link>
          </div>
     
      <div className="dashboard">

        <div className="container1">
        
          <div className="listing-container">
          </div>
        </div>
      </div>
      </div>
    );
  }
}
