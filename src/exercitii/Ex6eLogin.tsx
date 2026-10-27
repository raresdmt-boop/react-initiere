import { useState } from "react";

export default function Ex6eLogin() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);



  function login(): void {
    if(username === "admin" && password === "1234") {
      setLoggedIn(true);
      
    }
    else {
      setError(true)
    }
  }

   return (
    <>
      {loggedIn ? (
        <p>Bine ai venit, admin!</p>
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button onClick={login}>Intră</button>

          {error && (
            <p className="red">Utilizator sau parolă greșită</p>
          )}
        </>
      )}
    </>
  );
}