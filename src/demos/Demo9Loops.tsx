export default function Demo9Loops() {
  let sum: number = 0;
  for (let i = 1; i <= 5; i++) {
    sum = sum + i;
  }

  const names: string[] = ["Ana", "Radu", "Maria"];
  let all: string = "";
  for (const name of names) {
    all = all + name + " ";
  }

  const squares: number[] = [];
  for (let i = 1; i <= 5; i++) {
    squares.push(i * i);
  }

  return (
    <>
      <h1>for</h1>
      <p>1 + 2 + 3 + 4 + 5 = {sum}</p>
      <p>Toate numele: {all}</p>
      <p>Pătrate:</p>
      <ul>
        {squares.map((square) => (
          <li key={square}>{square}</li>
        ))}
      </ul>
      <p className="hint">
        for calculează înainte de return; în JSX afișezi doar rezultatul.
      </p>
    </>
  );
}
