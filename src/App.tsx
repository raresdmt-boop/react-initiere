import { useState } from "react";
import Demo1Jsx from "./demos/Demo1Jsx";
import Demo2Variables from "./demos/Demo2Variables";
import Demo3Click from "./demos/Demo3Click";
import Demo4State from "./demos/Demo4State";
import Demo5Input from "./demos/Demo5Input";
import Demo6Conditions from "./demos/Demo6Conditions";
import Demo7Lists from "./demos/Demo7Lists";
import Ex1aProfile from "./exercitii/Ex1aProfile";
import Ex1bCard from "./exercitii/Ex1bCard";
import Ex2aAbout from "./exercitii/Ex2aAbout";
import Ex2bRectangle from "./exercitii/Ex2bRectangle";
import Ex3aConsole from "./exercitii/Ex3aConsole";
import Ex3bPlusMinus from "./exercitii/Ex3bPlusMinus";
import Ex4aCounter from "./exercitii/Ex4aCounter";
import Ex4bVotes from "./exercitii/Ex4bVotes";
import Ex5aCharCount from "./exercitii/Ex5aCharCount";
import Ex5bFullName from "./exercitii/Ex5bFullName";
import Ex6aPassword from "./exercitii/Ex6aPassword";
import Ex6bSecret from "./exercitii/Ex6bSecret";
import Ex7aMovies from "./exercitii/Ex7aMovies";
import Ex7bDelete from "./exercitii/Ex7bDelete";

const demos = [
  { title: "1. Componentă + JSX", page: <Demo1Jsx /> },
  { title: "2. Variabile cu tip", page: <Demo2Variables /> },
  { title: "3. onClick", page: <Demo3Click /> },
  { title: "4. useState", page: <Demo4State /> },
  { title: "5. Input", page: <Demo5Input /> },
  { title: "6. Condiții", page: <Demo6Conditions /> },
  { title: "7. Liste", page: <Demo7Lists /> },
];

const exercises = [
  { title: "1a. Profil", page: <Ex1aProfile /> },
  { title: "1b. Carte de vizită", page: <Ex1bCard /> },
  { title: "2a. Despre mine", page: <Ex2aAbout /> },
  { title: "2b. Dreptunghi", page: <Ex2bRectangle /> },
  { title: "3a. Butoane în consolă", page: <Ex3aConsole /> },
  { title: "3b. Plus / minus", page: <Ex3bPlusMinus /> },
  { title: "4a. Contor", page: <Ex4aCounter /> },
  { title: "4b. Voturi", page: <Ex4bVotes /> },
  { title: "5a. Numără caractere", page: <Ex5aCharCount /> },
  { title: "5b. Nume complet", page: <Ex5bFullName /> },
  { title: "6a. Parolă", page: <Ex6aPassword /> },
  { title: "6b. Mesaj secret", page: <Ex6bSecret /> },
  { title: "7a. Filme", page: <Ex7aMovies /> },
  { title: "7b. Șterge filme", page: <Ex7bDelete /> },
];

export default function App() {
  const [selected, setSelected] = useState<string>(demos[0].title);
  const current = [...demos, ...exercises].find(
    (item) => item.title === selected,
  );

  return (
    <div className="app">
      <nav className="menu">
        <h2>Demo-uri</h2>
        {demos.map((item) => (
          <button
            key={item.title}
            className={item.title === selected ? "active" : ""}
            onClick={() => setSelected(item.title)}
          >
            {item.title}
          </button>
        ))}
        <h2>Exerciții</h2>
        {exercises.map((item) => (
          <button
            key={item.title}
            className={item.title === selected ? "active" : ""}
            onClick={() => setSelected(item.title)}
          >
            {item.title}
          </button>
        ))}
      </nav>
      <main className="content">{current?.page}</main>
    </div>
  );
}
