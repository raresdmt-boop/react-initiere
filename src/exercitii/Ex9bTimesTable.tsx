import { useState } from "react";

export default function Ex9bTimesTable() {

  const [n, setN] = useState<number>(7);

  function table(x: number): string[] {
    const lines: string[] = []

    for(let i = 1; i <= 10; i++) {
      lines.push(`${x} x ${i} = ${x * i}`);
    }

    return lines;
  }

 return (
    <>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />

      <ul>
        {table(n).map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </>
  );
}
