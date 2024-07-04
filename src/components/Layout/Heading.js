import React, { Fragment } from 'react';
import classes from "./Heading.module.css";
import mainheaderImage from "../../assests/heading.png";
import HeadingCartButton from './HeadingCartButton';

const Heading = () => {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>TASTEEZ</h1>
        <HeadingCartButton/>
        </header>
        <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!"/>
        
        </div>
    </Fragment>
  )
}

export default Heading