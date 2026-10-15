export default function Demo3Click() {
  let x: number = 0;

  function increment(): void {
    x = x + 1;
    console.log("x =", x);
  }

  return (
    <>
      <h1>Eveniment onClick</h1>
      <button onClick={increment}>Apasă {x}</button>
      <p className="hint">
        Deschide consola (F12). La fiecare click, x crește în consolă, dar pe
        buton rămâne 0: o variabilă simplă nu redesenează ecranul.
      </p>
    </>
  );
}
