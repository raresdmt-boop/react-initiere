import { useState } from "react";

export default function Ex5cMirror() {

  const [text, setText]= useState<string>("");

  return (
    <>
    <h1>Oglinda</h1>
    <input
    value = {text}
    onChange = {(e) => setText(e.target.value)}></input>
    <p>Litere mari: {text.toUpperCase()}</p>
    <p>Litere mici: {text.toLowerCase()}</p>
    <p>Invers: {text.split("").reverse().join("")}</p>
    </>
  );
}
