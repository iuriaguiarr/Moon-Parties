import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Parties, Login, Panel } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/parties" component={Parties} />
        <Route path="/login" component={Login} />
        <Route path="/panel" component={Panel} />
      </Switch>
    </BrowserRouter>
  );
}
