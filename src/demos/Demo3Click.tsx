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
        Deschide consola (F12) și apasă de câteva ori. Compară numărul din
        consolă cu cel de pe buton.
      </p>
    </>
  );
}
