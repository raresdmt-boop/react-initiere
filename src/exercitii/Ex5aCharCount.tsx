import { useState } from "react";

export default function Ex5aCharCount() {

  const [text, setText] = useState<string>("");

  return (
    <>
    <input
    value = {text}
    onChange={(e) => setText(e.target.value)}
    maxLength={50}
    />
    <h1>Salut!</h1>
    <p>{text.length} / 50 caractere</p>
    <p>Mai poți scrie {50 - text.length} caractere.</p>
    <button onClick={() => setText("")}>Șterge</button>
    </>
  );
}
