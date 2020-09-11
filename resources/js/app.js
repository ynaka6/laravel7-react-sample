import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/";
import { setCurrentUser } from "./store/auth";
import history from './history';
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import '../sass/app.scss';

store.dispatch(setCurrentUser());

const app = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route path="/about" component={About} />
                    <GuestRoute path="/login" children={<Login />} />
                    <PrivateRoute path="/" children={<Home />} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
, app);