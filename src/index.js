import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "antd/dist/antd.css";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Profile from "views/Profile.js";

const isLogged = localStorage.getItem("isLogged");

ReactDOM.render(
  <ToastProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/profile" exact component={Profile} />
        <Redirect from="*" to={isLogged ? "/admin" : "/auth"} />
      </Switch>
    </BrowserRouter>
  </ToastProvider>,
  document.getElementById("root")
);
