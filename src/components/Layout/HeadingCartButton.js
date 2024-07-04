import CartIcon from "../Cart/CartIcon";
import classes from "./HeadingCartButton.module.css";

const HeadingCartButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeadingCartButton