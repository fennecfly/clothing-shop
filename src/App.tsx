import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { AppProps, AppState } from "./AppInterfaces";
import Header from "./components/Header/HeaderComponent";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";
import SignInAndUpPage from "./pages/SignInAndUp/SignInAndUpComponent";

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth: null | firebase.default.Unsubscribe = null;

  componentDidMount(): void {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount(): void {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render(): JSX.Element {
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
}

export default App;
