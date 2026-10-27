import { useState } from "react";

export default function Ex5bFullName() {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <>
    <input
    value = {firstName}
    onChange = {(e) => setFirstName(e.target.value)}>
    </input>
    <input
    value = {lastName}
    onChange = {(e) => setLastName(e.target.value)}>
    </input>
    <p>Nume complet: {firstName} {lastName}</p>
    <p>Initiale: {firstName.charAt(0)}{lastName.charAt(0)}</p>  
    </>
  );
}
