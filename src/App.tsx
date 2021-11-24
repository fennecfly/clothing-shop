import React from "react";
import { connect } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { EmptyObject } from "redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { AppDispatchProps, AppProps, AppStateProps } from "./AppInterfaces";
import Header from "./components/Header/HeaderComponent";
import { auth, createUserDocument } from "./firebase/firebaseUtils";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPageComponent";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";
import SignInAndUpPage from "./pages/SignInAndUpPage/SignInAndUpPageComponent";
import { selectCartItems } from "./redux/cart/cartSelectors";
import {
  MyMapDispatchToProps,
  MyMapStateToProps,
} from "./redux/reducerInterfaces";
import { setCurrentUserAction } from "./redux/user/userActions";
import { User } from "./redux/user/userInterfaces";
import { selectCurrentUser } from "./redux/user/userSelectors";

class App extends React.Component<AppProps, EmptyObject> {
  unsubscribeFromAuth: null | firebase.default.Unsubscribe = null;

  componentDidMount(): void {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth, {});

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...(snapShot.data() as Omit<User, "id">),
          });
        });
      } else {
        setCurrentUser(null);
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

          <Route
            exact={true}
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUpPage />
            }
          />

          <Route
            exact={true}
            path="/checkout"
            render={() =>
              this.props.cartItems.length ? (
                <CheckoutPage />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps: MyMapStateToProps<AppStateProps> =
  createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems,
  });

const mapDispatchToProps: MyMapDispatchToProps<AppDispatchProps> = (
  dispatch
) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
