import React, {Component} from 'react';
import Router from './Router.js';
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8848/`,
  });


  class App extends Component {
    constructor() {
      super();
      api.get("/").then((res) => {
        console.log(res.data);
      });
    }
    render() {
      return (
        <Router />
      );
    }
  }
export default App;
