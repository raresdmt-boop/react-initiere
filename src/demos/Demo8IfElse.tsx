import { useState } from "react";

export default function Demo8IfElse() {
  const [age, setAge] = useState<number>(0);

  function category(a: number): string {
    if (a < 0) {
      return "Vârstă invalidă";
    } else if (a < 14) {
      return "Copil";
    } else if (a < 18) {
      return "Adolescent";
    } else {
      return "Adult";
    }
  }

  return (
    <>
      <h1>if / else</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <p>Categorie: {category(age)}</p>
      <p className="hint">
        if / else nu se scrie direct în JSX: îl pui într-o funcție care întoarce
        rezultatul, iar în JSX chemi funcția.
      </p>
    </>
  );
}
