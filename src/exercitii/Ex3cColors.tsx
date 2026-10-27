export default function Ex3cColors() {

  function choose(color: string): void {
    console.log("Ai ales: " + color);
  }

  return (
    <>
      <button onClick={() => choose("Roșu")}>Roșu</button>
      <button onClick={() => choose("Verde")}>Verde</button>
      <button onClick={() => choose("Albastru")}>Albastru</button>
    </>
  );
}
