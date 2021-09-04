import axios from "axios";

export default axios.create({
  baseURL: "https://retoolapi.dev/mka0wj",
  // mode: 'cors',
  'Access-Control-Allow-Origin': '*',
  headers: {
    "Content-type": "application/json"
  }
});