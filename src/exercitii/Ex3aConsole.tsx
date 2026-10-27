export default function Ex3aConsole() {
  function sayHello(): void {
    console.log("Salut din React!");
  }

  function showTime(): void {
    console.log(new Date().toLocaleTimeString());
  }

  return<>
      <button onClick={sayHello}>Spune salut</button>
      <button onClick={showTime}>Arată ora</button>
    </>
  ;
}
