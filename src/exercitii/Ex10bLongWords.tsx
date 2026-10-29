export default function Ex10bLongWords() {
  const words: string[] = [
    "mere",
    "programare",
    "carte",
    "calculator",
    "floare",
    "React"
  ];

  const longWords: string[] = words.filter(
    (word) => word.length > 5
  );

  return (
    <>
      <p>Toate cuvintele: {words.join(", ")}</p>
      <p>Cuvinte lungi: {longWords.join(", ")}</p>
      <p>Număr cuvinte lungi: {longWords.length}</p>
    </>
  );
}
