export default function Ex3dCalculator() {
  const a: number = 8;
  const b: number = 2;

  function show(operation: string, result: number): void {
    console.log(`${a} ${operation} ${b} = ${result}`);
  }

  return(
    <>
    <h1>{a} și {b}</h1>
    
    <button onClick = {() => show("+", a + b)}>+</button>
    <button onClick = {() => show("-", a - b)}>-</button>
    <button onClick = {() => show("x", a * b)}>x</button>
    <button onClick = {() => show("/", a / b)}>/</button>
    </>
  );

}
