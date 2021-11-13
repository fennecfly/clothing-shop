import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebaseUtils";
import { RootState } from "../../redux/store";
import CartDropdown from "../CartDropdown/CartDropdownComponent";
import CartIcon from "../CartIcon/CartIconComponent";
import { HeaderProps } from "./HeaderInterfaces";
import "./HeaderStyles.scss";

const Header = ({ currentUser, cartHidden }: HeaderProps): JSX.Element => (
  <div className="header">
    <Link to="/">
      <Logo className="logoContainer" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>

    {cartHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: RootState) => ({
  currentUser,
  cartHidden: hidden,
});

export default connect(mapStateToProps)(Header);
