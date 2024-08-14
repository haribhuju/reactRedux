import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increaseByAmount,
  increment,
} from "./store/counterSlice/counter";

const Counter = () => {
  const count = useSelector((state) => state.myCounter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="fun">
        <p>
          Count is: <span>{count}</span>
        </p>
        <div className="funButton">
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
          <button onClick={() => dispatch(increaseByAmount(100))}>
            Increase by 100
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
