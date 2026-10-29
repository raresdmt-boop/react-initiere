import { useState } from 'react';

export default function Ex9cEvens() {

  const [n, setN] = useState<number>(10);

  function evensUpTo(limit: number): number[] {

    const numbers: number[] = [];

    for(let i=1; i <= limit; i++){
      if( i % 2 == 0 ) {
        numbers.push(i);
      }
    }
    return numbers;
  }

  return (
    <>
    <input
    type="number"
    value={n}
    onChange = {(e) => setN(Number(e.target.value))}>
    </input>
    <p><strong>Până la {n}:</strong> {evensUpTo(n).join(", ")}</p>
    </>
  );
}
