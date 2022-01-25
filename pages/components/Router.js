import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../index";
import Detail from "../Detail";

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:idmovie" component={Detail} />
      </Switch>
    </div>
  );
}
