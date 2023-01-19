import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Card</button>
      </header>
      <div className={classes["main-image"]}>
        <img alt="A table food of delicious food!" src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
