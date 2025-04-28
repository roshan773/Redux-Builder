import React from 'react'
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector(({ counter }) => counter);
  return <h1>Counter: {counter}</h1>;
}

export default CounterValue;
