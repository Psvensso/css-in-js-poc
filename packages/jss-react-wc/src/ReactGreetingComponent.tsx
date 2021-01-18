import React from "react";
import Styles from "./ReactGreetingComponent.module.css";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  wrapper: {
    color: "hotpink",
    p: { color: "hotpink" },
  },
});

export const Greeting = ({ name }: { name: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper + " " + Styles.test}>
      <p>ReactGreetingComponent, i should be hotpink, Hello, {name}!</p>
    </div>
  );
};
