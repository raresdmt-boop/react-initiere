import { useState } from "react";

export default function Ex4dStep() {

const [ count, Setcount ] = useState<number>(0);

function add(step: number): void {
  Setcount(step + count);
}

function reset(): void {
  Setcount(0);
}


  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => (add(1))}>+1</button>
    <button onClick={() => (add(5))}>+5</button>
    <button onClick={() => (add(10))}>+10</button>
    <button onClick={(reset)}>Reset</button>
    </>
  )
}
