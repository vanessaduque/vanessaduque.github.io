/* eslint-disable */

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./scenes/Home";
import Introduction from "./scenes/Introduction";
import SelfReferential from "./scenes/SelfReferential";
import SeriesProgram from "./scenes/SeriesProgram"
import DialoguesFoundations from "./scenes/DialoguesFoundations"

const FourOhFor = () => (
  <div>
    <h1>Sorry, 404</h1>
    <Link to="/"><h3>Back to home</h3></Link>
 </div>);

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/introduction-to-work" component={Introduction} />
        <Route path="/self-referential" component={SelfReferential} />
        <Route path="/series-program" component={SeriesProgram} />
        <Route path="/dialogues-foundations" component={DialoguesFoundations} />
        <Route component={FourOhFor} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
