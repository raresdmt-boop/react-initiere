export default function Ex2eInitials() {
  
  const firstName: string = "Maria";
  const lastName: string = "Ionescu";
  const age: number = 17;

  function initials(first: string, last: string): string {
    return first[0] + last[0];
  }

  function isAdult(a: number): boolean {
    return a >= 18;
  }

  return<>
      <h1>{initials(firstName, lastName)}</h1>
      <p>{firstName} {lastName}, {age} ani</p>
      <p>Major: {isAdult(age).toString()}</p>
      <p>Major peste un an: {isAdult(age + 1).toString()}</p>
    </>
}
