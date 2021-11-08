import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/HeaderComponent";
import { auth, createUserDocument } from "./firebase/firebaseUtils";
import { EmptyObject } from "./helpers/EmptyObject";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";
import SignInAndUpPage from "./pages/SignInAndUpPage/SignInAndUpPageComponent";
import { User, UserState } from "./redux/user/userInterfaces";

class App extends React.Component<EmptyObject, UserState> {
  constructor(props: EmptyObject) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth: null | firebase.default.Unsubscribe = null;

  componentDidMount(): void {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth, {});

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...(snapShot.data() as Omit<User, "id">),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
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
