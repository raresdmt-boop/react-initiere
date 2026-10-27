import { useState } from "react";

export default function Ex4cDice() {

const [value, setValue] = useState<number>(1);
const [rolls, setRolls] = useState<number>(0);
  
function rollDice(): void{
  setValue(Math.floor(Math.random() * 6) +1);
  setRolls(rolls+1);
}

  return (
<>
     <p>🎲 {value}</p>
     <p>Aruncări: {rolls}</p>
     <button onClick={rollDice}>Arunca zarul</button>
    </>
  );
}
