export default function Ex2aAbout() {
  
  const firstName: string = "Rares";
  const lastName: string = "Dumitru";
  const birthYear: number = 1994;

  function ageIn(year: number): number{
    return year - birthYear;
  }


  return (<>
      <h1>{firstName} {lastName}</h1>
      <p>Nascut in {birthYear}</p>
      <p>In 2026 are {ageIn(2026)} ani</p>
      <p>In 2030 va avea {ageIn(2030)} ani</p>
    </>);
}
