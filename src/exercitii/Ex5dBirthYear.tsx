import { useState } from "react";

export default function Ex5dBirthYear() {

  const [year, setYear] = useState<number>(2000);

  return (
    <>
    <input
    value = {year}
    onChange = {(e) => setYear(Number(e.target.value))}></input>
    <p> În 2026 ai {2026 - year} ani.</p>
    </>
  );
}
