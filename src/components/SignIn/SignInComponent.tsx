import { FirebaseError } from "@firebase/util";
import React, { BaseSyntheticEvent } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";
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

  handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/user-not-found") {
          alert("This user doesn't exist");
        } else if (error.code === "auth/wrong-password") {
          alert("The password is wrong or the user signed up with Google");
        } else {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  handleChange = (event: BaseSyntheticEvent): void => {
    const { value, name } = event.target;
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

            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
