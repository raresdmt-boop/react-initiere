import { useState } from "react";

export default function Ex9dFactorial() {

  const [n, setN] = useState<number>(0);

  function factorial(x: number): number {
    let result = 1;

    for(let i = 2; i <= x; i++){
      result *= i;
    }
    return result;
  }

  return (
  <>
    <input
    type="number"
    value={n}
    onChange = {(e) => setN(Number(e.target.value))}>
    </input>

    <p>!{n} = {factorial(n)}</p>
  </>
  );
}
