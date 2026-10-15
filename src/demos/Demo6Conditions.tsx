import { useState } from "react";

export default function Demo6Conditions() {
  const [age, setAge] = useState<number>(0);

  return (
    <>
      <h1>Condiții</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <p>{age >= 18 ? "Adult" : "Minor"}</p>
      {age > 100 && <p className="red">Sigur ai peste 100 de ani?</p>}
    </>
  );
}
