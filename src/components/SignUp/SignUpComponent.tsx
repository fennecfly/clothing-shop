import React, { BaseSyntheticEvent } from "react";
import { auth, createUserDocument } from "../../firebase/firebaseUtils";
import { EmptyObject } from "../../helpers/EmptyObject";
import CustomButton from "../CustomButton/CustomButtonComponent";
import FormInput from "../FormInput/FormInputComponent";
import { SignInState } from "./SignUpInterfaces";
import "./SignUpStyles.scss";

class SignUp extends React.Component<EmptyObject, SignInState> {
  constructor(props: EmptyObject) {
    super(props);

    this.state = {
      confirmPassword: "",
      displayName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters");
    } else {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (user) {
        await createUserDocument(user, { displayName });

        this.setState({
          email: "",
          password: "",
          displayName: "",
          confirmPassword: "",
        });
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
      <div className="signUp">
        <h2 className="title">I do not have an account</h2>

        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required={true}
          />

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

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required={true}
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
