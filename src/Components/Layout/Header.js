import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assests/meals.jpg";
import './Header.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className="header" >
        <h1>Food Zone</h1>
        <HeaderCartButton/>
      </header>
      <div className="main-image" >
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
