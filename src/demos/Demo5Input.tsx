import { useState } from "react";

export default function Demo5Input() {
  const [name, setName] = useState<string>("");

  return (
    <>
      <h1>Input controlat</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Numele tău"
      />
      <p>Salut, {name}!</p>
      <p>Ai scris {name.length} caractere.</p>
      <button onClick={() => setName("")}>Șterge</button>
    </>
  );
}
