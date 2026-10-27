export default function Ex3bPlusMinus() {
  let points: number = 10;

  function increase(): void {
    points++;
    console.log(points);
  }

  function decrease(): void {
    points--;
    console.log(points);
  }

  return (
    <>
      <h1>Puncte: {points}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>−</button>

      <p>
        Pe ecran ramane 10 deoarece modificarea unei variabile
        nu ii spune lui React sa actualizeze si interfata.
      </p>
    </>
  );
}
