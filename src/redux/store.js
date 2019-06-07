import { createStore } from 'redux'
const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  houses: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_IMG = "UPDATE_IMG";
export const GET_HOUSE = "GET_HOUSE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });
    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });
    case UPDATE_IMG:
      return Object.assign({}, state, { img: action.payload });
    case `${GET_HOUSE}_FULFILLED`:
      return { ...state, houses: action.payload };
    default:
      return state;
  }
}

export default createStore(reducer);