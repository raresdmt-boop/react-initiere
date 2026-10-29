export default function Ex8aGradeLabel() {

  function label(grade: number): string {
    if(grade >= 10){
      return "Excelent";
    } else if (grade >= 8) {
      return "Foarte bine"
    } else if (grade >= 5 ){
      return "Suficient"
    } else {
      return "Insuficient"}
  }

  return (
    <>
    <ul>
      <li>4: {label(4)}</li>
      <li>6: {label(6)}</li>
      <li>9: {label(9)}</li>
      <li>10: {label(10)}</li>
    </ul>
    </>
  );
}
