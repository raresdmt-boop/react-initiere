import { useState } from "react";

export default function Ex4eTrafficLight() {

  const[ color, setColor] = useState<string>("gray");

  function coloring(newColor: string): void {
    setColor(newColor);
  }

  return (
<>

    <h1 style = {{color: color}}>Traffic Light</h1>
    <button onClick={() => coloring("red")}>Roșu</button>
    <button onClick={() => coloring("orange")}>Galben</button>
    <button onClick={() => coloring("green")}>Verde </button>
    
</>
  );
}
