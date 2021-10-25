import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/HeaderComponent";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";
import SignInAndUpPage from "./pages/SignInAndUp/SignInAndUpComponent";

function App(): JSX.Element {
  return (
    <HashRouter basename="/">
      <Header />

      <Switch>
        <Route exact={true} path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />

        <Route path="/signIn" component={SignInAndUpPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
