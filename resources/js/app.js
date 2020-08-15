import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

import '../sass/app.scss';

const app = document.getElementById("app");
ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </Layout>
    </Router>
, app);