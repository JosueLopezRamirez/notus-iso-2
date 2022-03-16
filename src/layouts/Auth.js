import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full min-h-screen flex items-center">
          <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
