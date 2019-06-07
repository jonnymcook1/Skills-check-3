import React, { Component } from "react";
import store, {
   UPDATE_NAME, UPDATE_ADDRESS,
   UPDATE_CITY, UPDATE_STATE,
   UPDATE_ZIP
} from '../redux/store'
import axios from "axios";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
 constructor(props) {
   super(props);
   this.state = {
       houses: {
           id: this.props.match.params,
           newId: 0,
           name: store.getState().name,
           address: store.getState().address,
           city: store.getState().city,
           state: store.getState().state,
           zip: store.getState().zip
       },

   };

    this.makePost = this.makePost.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  makePost() {
    axios
      .post("http://localhost:5050/api/properties", {
        name: this.props.name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip
      })
      .then(response => {
        this.setState({
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip
        });
      });
  }

  cancel() {
    this.setState({ name: "", address: "", city: "", state: "", zip: 0 });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.props.getHouses(this.props);
    }
  }

  saveChanges() {
   let { name, address, city, state, zip } = this.state
   store.dispatch({
     type: UPDATE_NAME,
     payload: name
   })
   store.dispatch({
     type: UPDATE_ADDRESS,
     payload: address
   })
   store.dispatch({
     type: UPDATE_CITY,
     payload: city
   })
   store.dispatch({
     type: UPDATE_STATE,
     payload: state
   })
   store.dispatch({
     type: UPDATE_ZIP,
     payload: zip
   })
  }

  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip
    } = this.props;
    return (
      <div className="Wizard">
        <div className="container">
          <h3>Property Name</h3>
          <input type="text" onChange={e => updateName(e.target.value)} />
          <h3>Address</h3>
          <input type="text" onChange={e => updateAddress(e.target.value)} />
          <h3>City</h3>
          <input type="text" onChange={e => updateCity(e.target.value)} />
          <h3>State</h3>
          <input type="text" onChange={e => updateState(e.target.value)} />
          <h3>Zip</h3>
          <input type="text" onChange={e => updateZip(e.target.value)} />
          <button className="cancel" onClick={this.cancel}>
            Cancel
          </button>
          <Link to="/">
            <button onClick={event => this.makePost(this.props)}>Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}