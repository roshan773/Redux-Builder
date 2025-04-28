// CounterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Add useSelector
import { handleAdd, handleReduce } from "../redux/Action";

const CounterButton = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count); // ✅ Pull count from Redux

  return (
    <div>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button
        disabled={count === 0}
        onClick={() => dispatch(handleReduce(1))}
        style={{ marginLeft: "20px" }}
      >
        REDUCE
      </button>
    </div>
  );
};

export default CounterButton;
