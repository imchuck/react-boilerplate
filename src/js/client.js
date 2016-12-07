import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Section1 from "./pages/Section1";

const app = document.getElementById('app');

// ReactDOM.render(<Layout />, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="section1" component={Section1}></Route>
    </Route>
  </Router>,
app)
