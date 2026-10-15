import { useState } from "react";
import type { ReactNode } from "react";
import Demo1Jsx from "./demos/Demo1Jsx";
import Demo2Variables from "./demos/Demo2Variables";
import Demo3Click from "./demos/Demo3Click";
import Demo4State from "./demos/Demo4State";
import Demo5Input from "./demos/Demo5Input";
import Demo6Conditions from "./demos/Demo6Conditions";
import Demo7Lists from "./demos/Demo7Lists";
import Demo8IfElse from "./demos/Demo8IfElse";
import Demo9Loops from "./demos/Demo9Loops";
import Demo10ArrayMethods from "./demos/Demo10ArrayMethods";
import Ex1aProfile from "./exercitii/Ex1aProfile";
import Ex1bCard from "./exercitii/Ex1bCard";
import Ex1cRecipe from "./exercitii/Ex1cRecipe";
import Ex1dSchedule from "./exercitii/Ex1dSchedule";
import Ex1eMenu from "./exercitii/Ex1eMenu";
import Ex2aAbout from "./exercitii/Ex2aAbout";
import Ex2bRectangle from "./exercitii/Ex2bRectangle";
import Ex2cTemperature from "./exercitii/Ex2cTemperature";
import Ex2dVat from "./exercitii/Ex2dVat";
import Ex2eInitials from "./exercitii/Ex2eInitials";
import Ex3aConsole from "./exercitii/Ex3aConsole";
import Ex3bPlusMinus from "./exercitii/Ex3bPlusMinus";
import Ex3cColors from "./exercitii/Ex3cColors";
import Ex3dCalculator from "./exercitii/Ex3dCalculator";
import Ex3eDice from "./exercitii/Ex3eDice";
import Ex4aCounter from "./exercitii/Ex4aCounter";
import Ex4bVotes from "./exercitii/Ex4bVotes";
import Ex4cDice from "./exercitii/Ex4cDice";
import Ex4dStep from "./exercitii/Ex4dStep";
import Ex4eTrafficLight from "./exercitii/Ex4eTrafficLight";
import Ex5aCharCount from "./exercitii/Ex5aCharCount";
import Ex5bFullName from "./exercitii/Ex5bFullName";
import Ex5cMirror from "./exercitii/Ex5cMirror";
import Ex5dBirthYear from "./exercitii/Ex5dBirthYear";
import Ex5eGreeting from "./exercitii/Ex5eGreeting";
import Ex6aPassword from "./exercitii/Ex6aPassword";
import Ex6bSecret from "./exercitii/Ex6bSecret";
import Ex6cEvenOdd from "./exercitii/Ex6cEvenOdd";
import Ex6dGrade from "./exercitii/Ex6dGrade";
import Ex6eLogin from "./exercitii/Ex6eLogin";
import Ex7aMovies from "./exercitii/Ex7aMovies";
import Ex7bDelete from "./exercitii/Ex7bDelete";
import Ex7cShopping from "./exercitii/Ex7cShopping";
import Ex7dAdults from "./exercitii/Ex7dAdults";
import Ex7eTodo from "./exercitii/Ex7eTodo";
import Ex8aGradeLabel from "./exercitii/Ex8aGradeLabel";
import Ex8bSeason from "./exercitii/Ex8bSeason";
import Ex8cTicket from "./exercitii/Ex8cTicket";
import Ex8dMax from "./exercitii/Ex8dMax";
import Ex8eEmail from "./exercitii/Ex8eEmail";
import Ex9aSum from "./exercitii/Ex9aSum";
import Ex9bTimesTable from "./exercitii/Ex9bTimesTable";
import Ex9cEvens from "./exercitii/Ex9cEvens";
import Ex9dFactorial from "./exercitii/Ex9dFactorial";
import Ex9eVowels from "./exercitii/Ex9eVowels";
import Ex10aVatPrices from "./exercitii/Ex10aVatPrices";
import Ex10bLongWords from "./exercitii/Ex10bLongWords";
import Ex10cFindProduct from "./exercitii/Ex10cFindProduct";
import Ex10dCart from "./exercitii/Ex10dCart";
import Ex10eCityFilter from "./exercitii/Ex10eCityFilter";

type Page = {
  title: string;
  page: ReactNode;
};

type Section = {
  title: string;
  page: ReactNode;
  exercises: Page[];
};

const sections: Section[] = [
  {
    title: "1. Componentă + JSX",
    page: <Demo1Jsx />,
    exercises: [
      { title: "1a. Profil", page: <Ex1aProfile /> },
      { title: "1b. Carte de vizită", page: <Ex1bCard /> },
      { title: "1c. Rețetă", page: <Ex1cRecipe /> },
      { title: "1d. Orar", page: <Ex1dSchedule /> },
      { title: "1e. Meniu restaurant", page: <Ex1eMenu /> },
    ],
  },
  {
    title: "2. Variabile cu tip",
    page: <Demo2Variables />,
    exercises: [
      { title: "2a. Despre mine", page: <Ex2aAbout /> },
      { title: "2b. Dreptunghi", page: <Ex2bRectangle /> },
      { title: "2c. Temperatură", page: <Ex2cTemperature /> },
      { title: "2d. Preț cu TVA", page: <Ex2dVat /> },
      { title: "2e. Inițiale și majorat", page: <Ex2eInitials /> },
    ],
  },
  {
    title: "3. onClick",
    page: <Demo3Click />,
    exercises: [
      { title: "3a. Butoane în consolă", page: <Ex3aConsole /> },
      { title: "3b. Plus / minus", page: <Ex3bPlusMinus /> },
      { title: "3c. Alege o culoare", page: <Ex3cColors /> },
      { title: "3d. Calculator în consolă", page: <Ex3dCalculator /> },
      { title: "3e. Zar în consolă", page: <Ex3eDice /> },
    ],
  },
  {
    title: "4. useState",
    page: <Demo4State />,
    exercises: [
      { title: "4a. Contor", page: <Ex4aCounter /> },
      { title: "4b. Voturi", page: <Ex4bVotes /> },
      { title: "4c. Zar pe ecran", page: <Ex4cDice /> },
      { title: "4d. Pași +1 / +5 / +10", page: <Ex4dStep /> },
      { title: "4e. Semafor", page: <Ex4eTrafficLight /> },
    ],
  },
  {
    title: "5. Input",
    page: <Demo5Input />,
    exercises: [
      { title: "5a. Numără caractere", page: <Ex5aCharCount /> },
      { title: "5b. Nume complet", page: <Ex5bFullName /> },
      { title: "5c. Oglindă", page: <Ex5cMirror /> },
      { title: "5d. Anul nașterii", page: <Ex5dBirthYear /> },
      { title: "5e. Salut personalizat", page: <Ex5eGreeting /> },
    ],
  },
  {
    title: "6. Condiții în JSX",
    page: <Demo6Conditions />,
    exercises: [
      { title: "6a. Parolă", page: <Ex6aPassword /> },
      { title: "6b. Mesaj secret", page: <Ex6bSecret /> },
      { title: "6c. Par sau impar", page: <Ex6cEvenOdd /> },
      { title: "6d. Admis / respins", page: <Ex6dGrade /> },
      { title: "6e. Login", page: <Ex6eLogin /> },
    ],
  },
  {
    title: "7. Liste",
    page: <Demo7Lists />,
    exercises: [
      { title: "7a. Filme", page: <Ex7aMovies /> },
      { title: "7b. Șterge filme", page: <Ex7bDelete /> },
      { title: "7c. Cumpărături", page: <Ex7cShopping /> },
      { title: "7d. Doar adulții", page: <Ex7dAdults /> },
      { title: "7e. Listă de sarcini", page: <Ex7eTodo /> },
    ],
  },
  {
    title: "8. if / else",
    page: <Demo8IfElse />,
    exercises: [
      { title: "8a. Note în cuvinte", page: <Ex8aGradeLabel /> },
      { title: "8b. Anotimp", page: <Ex8bSeason /> },
      { title: "8c. Bilet de film", page: <Ex8cTicket /> },
      { title: "8d. Cel mai mare", page: <Ex8dMax /> },
      { title: "8e. Validare email", page: <Ex8eEmail /> },
    ],
  },
  {
    title: "9. for",
    page: <Demo9Loops />,
    exercises: [
      { title: "9a. Suma 1..n", page: <Ex9aSum /> },
      { title: "9b. Tabla înmulțirii", page: <Ex9bTimesTable /> },
      { title: "9c. Numere pare", page: <Ex9cEvens /> },
      { title: "9d. Factorial", page: <Ex9dFactorial /> },
      { title: "9e. Vocale", page: <Ex9eVowels /> },
    ],
  },
  {
    title: "10. map / filter / find / reduce",
    page: <Demo10ArrayMethods />,
    exercises: [
      { title: "10a. Prețuri cu TVA", page: <Ex10aVatPrices /> },
      { title: "10b. Cuvinte lungi", page: <Ex10bLongWords /> },
      { title: "10c. Caută produs", page: <Ex10cFindProduct /> },
      { title: "10d. Total coș", page: <Ex10dCart /> },
      { title: "10e. Filtru orașe", page: <Ex10eCityFilter /> },
    ],
  },
];

export default function App() {
  const [selected, setSelected] = useState<Page>(sections[0]);

  return (
    <div className="app">
      <nav className="menu">
        {sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {[section, ...section.exercises].map((item) => (
              <button
                key={item.title}
                className={item === selected ? "active" : ""}
                onClick={() => setSelected(item)}
              >
                {item === section ? "Demo" : item.title}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <main className="content">{selected.page}</main>
    </div>
  );
}
