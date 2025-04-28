// Counter.jsx
import React from "react";
import { useSelector } from "react-redux";
import CounterButton from "./Counterbutton";
import CounterValue from "./Countervalue";

const Counter = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme === "light" ? "light_theme" : "dark_theme"}>
      <CounterValue/>
      <CounterButton/>
    </div>
  );
};

export default Counter;
