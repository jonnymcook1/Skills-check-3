import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard"
import Edit from "./components/Edit"

export default (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/wizard" component={Wizard}  />
      <Route exact path="/house/:id" component={Edit}/>
    </Switch>
  );