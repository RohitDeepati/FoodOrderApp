import { Fragment } from "react";
import mealsImg from "../../assests/meals.jpg";
import './Header.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className="header" >
        <h1>Food Zone</h1>
        <button>Cart</button>
      </header>
      <div className="main-img" >
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
