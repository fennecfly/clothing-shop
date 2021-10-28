import React, { BaseSyntheticEvent } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { EmptyObject } from "../../helpers/EmptyObject";
import CustomButton from "../CustomButton/CustomButtonComponent";
import FormInput from "../FormInput/FormInputComponent";
import { SignInState } from "./SignInInterfaces";
import "./SignInStyles.scss";

class SignIn extends React.Component<EmptyObject, SignInState> {
  constructor(props: EmptyObject) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: BaseSyntheticEvent): void => {
    const { value, name } = event.target;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.setState({ [name]: value });
  };

  render(): JSX.Element {
    return (
      <div className="signIn">
        <h2 className="title">I already have an account</h2>

        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required={true}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required={true}
          />

          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
