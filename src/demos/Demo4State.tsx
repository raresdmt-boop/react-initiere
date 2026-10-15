import { useState } from "react";

export default function Demo4State() {
  const [x, setX] = useState<number>(0);

  function increment(): void {
    setX(x + 1);
  }

  function reset(): void {
    setX(0);
  }

  return (
    <>
      <h1>useState</h1>
      <button onClick={increment}>Apasă {x}</button>
      <button onClick={reset}>Reset</button>
      <p className="hint">
        setX schimbă valoarea și redesenează componenta, de aceea butonul arată
        noul număr.
      </p>
    </>
  );
}
