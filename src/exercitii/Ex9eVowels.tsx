import { useState } from "react";

export default function Ex9eVowels() {

  const [text, setText] = useState<string>("Programare in React");

  function countVowels(value: string): number {

    let count = 0;

    for( const letter of value.toLowerCase()) {
      if ("aeiouăâî".includes(letter)) {
        count++;
      }
    }
  return count;
  }

  return (
    <>
    <input
    type="text"
    value = {text}
    onChange = {(e) => setText(e.target.value)}>
    </input>
    <p>
      {text} → Vocale: {countVowels(text)}
      </p>
    </>
  );
}
