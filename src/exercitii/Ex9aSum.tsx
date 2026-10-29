import { useState } from "react";

export default function Ex9aSum() {

  const [n, setN] = useState<number>(100);

  function sumTo(limit: number): number {
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
      sum += i;
    }

    return sum;
  }

  return (
    <>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />

      <h2>1 + 2 + ... + {n} = {sumTo(n)}</h2>
    </>
  );
}
