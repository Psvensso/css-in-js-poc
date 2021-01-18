import React from "react";
import x from "./ReactGreetingComponent.css";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  wrapper: {
    color: "hotpink",
    p: { color: "hotpink" },
  },
});

export const Greeting = ({ name }: { name: string }) => {
  const classes = useStyles();
  console.log(x);
  return (
    <div className={classes.wrapper}>
      <p>ReactGreetingComponent, i should be hotpink, Hello, {name}!</p>
    </div>
  );
};
