import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";

function App(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
