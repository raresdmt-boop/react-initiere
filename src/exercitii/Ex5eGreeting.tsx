import { useState } from "react";

export default function Ex5eGreeting() {

  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  function sayHello(): void {
  setGreeting(`Salut, ${name}!`);
  setName("");
}

  return (
    <>
    <input
    value = {name}
    onChange = {(e) => setName(e.target.value)}></input>
    <p>{greeting}</p>
    <button onClick = {sayHello}>Salută</button>

    </>
  );
}
