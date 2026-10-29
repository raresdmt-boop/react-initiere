import { useState } from "react";

export default function Ex8bSeason() {

  const[month, setMonth] = useState<number>(0);

  function season(m: number): string {
    if ( m<1 || m>12 ) {
      return "Lună invalidă"
    } else if ( m === 12 || m < 3){
      return "Iarnă"
    } else if ( m < 6 ) {
      return "Primăvară"
    } else if ( m < 9 ) {
      return "Vară"
    } else {
      return "Toamnă"
    }
  }

  return (
    <>
    <h1>Anotimp</h1>
    <input
    type = "number"
    value = {month}
    onChange = {(e) => setMonth(Number(e.target.value))}>
    </input>


    <p> Luna {month}: {season(month)}</p>

    </>
  );
}
