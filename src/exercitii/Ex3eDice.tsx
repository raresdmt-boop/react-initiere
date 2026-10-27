export default function Ex3eDice() {

  function roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  function showRoll(): void {
    console.log(`Zarul arată: ${roll()}`);
  }

  return (
    <>
      <button onClick={showRoll}>Aruncă zarul</button>
    </>
  );
}