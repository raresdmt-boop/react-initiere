import { useState } from "react";

type Person = {
  id: number;
  name: string;
  age: number
};

export default function Ex7dAdults() {

const people: Person[] = [
  { id: 1, name: "Alex Popa", age: 24 },
  { id: 2, name: "Andrei Bibire", age: 16 },
  { id: 3, name: "Roxana Manole", age: 26 },
  { id: 4, name: "Bogdan Andronache", age: 14 }
];

const adults: Person[] = people.filter((p) => p.age > 18);


  return (
    <>
    <h1>Adulti: {adults.length} din {people.length}</h1>
    <p>Lista adultilor:</p>
    <ul>
      {
      adults.map((a) => <li key={a.id}>{a.name}</li>)
    }
    </ul>
    </>
  );
}
