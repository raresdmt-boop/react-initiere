export default function Demo2Variables() {
  const name: string = "Ana";
  const age: number = 20;
  const isStudent: boolean = true;

  function greet(person: string): string {
    return "Salut, " + person + "!";
  }

  return (
    <>
      <h1>{greet(name)}</h1>
      <p>Nume: {name}</p>
      <p>Vârsta: {age}</p>
      <p>Anul viitor: {age + 1}</p>
      <p>Nume cu litere mari: {name.toUpperCase()}</p>
      <p>Student: {isStudent.toString()}</p>
    </>
  );
}
