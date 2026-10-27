import { useState } from "react";

export default function Ex6cEvenOdd() {

  const [n, setN] = useState<number>(0)

  return (
    <>
    <input
    type="number"
    value= {n}
    onChange={(e) => setN(Number(e.target.value))}
    />
    { n % 2 == 0 ? (
      <p>"Par"</p>
      ) : (
      <p>"Impar"</p>
        ) }
    { n < 0 && <p className="red">Număr negativ</p>}

    </>
  );
}
