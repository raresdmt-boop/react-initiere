import { useState } from "react";

export default function Ex8eEmail() {

  const [email, setEmail] = useState<string>("");

  function validate(value: string): string {
    if(value === "") {
      return "Emailul este obligatoriu"
    }
    else if(!value.includes("@")) {
      return "Lipsește @"
    }
    else if(!value.includes(".")) {
      return "Lipsește domeniul (ex. .ro)"
    }
    else {
      return "Email valid"
    }
  }

  return (
  <>
  <input value = {email} onChange = {(e) => setEmail(e.target.value)}> </input>
  <p>{validate(email)}</p>
  </>
  );
}
