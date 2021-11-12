import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { AppProps } from "./AppInterfaces";
import Header from "./components/Header/HeaderComponent";
import { auth, createUserDocument } from "./firebase/firebaseUtils";
import { EmptyObject } from "./helpers/EmptyObject";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/ShopPage/ShopPageComponent";
import SignInAndUpPage from "./pages/SignInAndUpPage/SignInAndUpPageComponent";
import { MyReducerAction } from "./redux/reducerInterfaces";
import { RootState } from "./redux/store";
import { getSetCurrentUserAction } from "./redux/user/userActions";
import { UserActionTypes } from "./redux/user/userActionTypes";
import { CurrentUser, User } from "./redux/user/userInterfaces";

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
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ user }: RootState) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (
  dispatch: Dispatch<
    MyReducerAction<UserActionTypes.SetCurrentUser, CurrentUser>
  >
) => ({
  setCurrentUser: (user: CurrentUser) =>
    dispatch(getSetCurrentUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
