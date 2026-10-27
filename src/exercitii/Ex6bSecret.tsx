import { useState } from "react";

export default function Ex6bSecret() {

  const[visible, setVisible] = useState<boolean>(false);

  return(
    <>
    <button onClick={() => setVisible(!visible)}>{
      visible == true ? ("Ascunde") : ("Arată")
      }</button>

    {visible && <p>Secretul este 42.</p>}
    </>
  )
  ;
}
