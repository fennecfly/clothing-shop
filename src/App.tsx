import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";

function App(): JSX.Element {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact={true} path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
