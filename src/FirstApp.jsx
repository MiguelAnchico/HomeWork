import { useState } from "react";

export const FirstApp = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <span>{count}</span>
      <br />

      <button onClick={handleSubstract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
