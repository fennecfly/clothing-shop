import React from "react";
import SignIn from "../../components/SignIn/SignInComponent";
import SignUp from "../../components/SignUp/SignUpComponent";
import "./SignInAndUpPageStyles.scss";

const SignInAndUpPage = (): JSX.Element => (
  <div className="signInAndUp">
    <SignIn />

    <SignUp />
  </div>
);

export default SignInAndUpPage;
