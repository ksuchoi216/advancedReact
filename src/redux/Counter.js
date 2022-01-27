import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button aria-label="Increment" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
