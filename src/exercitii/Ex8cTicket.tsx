import { useState } from "react";

export default function Ex8cTicket() {

  const [age, setAge] = useState<number>(0);

  function ticketPrice(a: number): number {
    if ( a >= 65 ) { 
      return 15
    } else if ( a >= 18 ) {
      return 25
    } else if ( a >= 7 ) {
      return 10
    } else {
      return 0
    }
  }

  return (
    <>
    <h1>Bilet de film</h1>
    <input
    type = "number"
    value={age}
    onChange = {(e) => setAge(Number(e.target.value))}></input>
    <p>Preț: {ticketPrice(age)}</p>
    </>
  );
}
