import { useState } from "react";

export default function Ex6dGrade() {

  const [grade, setGrade] = useState<number>(1);

  return (
    <>
    <input
    type="number"
    value={grade}
    onChange={(e) => setGrade(Number(e.target.value))} 
    />
    { grade > 5 ? (
      <p className="green">Admis</p>
      ) : (
      <p className="red">Respins</p>
      ) }

    { grade === 10 && <p>Felicitări!</p>}
    </>
  );
}
