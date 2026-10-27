import { useState } from "react";

export default function Ex4aCounter() {
  const [count, setCount] = useState<number>(0);

  function increment(): void {
    setCount(count + 1);
  }

  function decrement(): void {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset(): void {
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
