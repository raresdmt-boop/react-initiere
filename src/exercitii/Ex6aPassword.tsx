import { useState } from "react";

export default function Ex6aPassword() {

  const [password, setPassword] = useState<string>("");


  return (
    <>
    <input
    type="password"
    value = {password}
    onChange={(e) => setPassword(e.target.value)}
    />
    {password.length < 8 ? (
      <p className="red">Prea scurtă: minim 8 caractere</p>
    ) : (
      <p className="green">Parolă OK</p>
    )}
    </>
  );
}
