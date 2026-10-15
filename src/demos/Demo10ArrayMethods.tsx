export default function Demo10ArrayMethods() {
  const numbers: number[] = [1, 2, 3, 4, 5, 6];

  const doubled: number[] = numbers.map((n) => n * 2);
  const evens: number[] = numbers.filter((n) => n % 2 === 0);
  const firstOverThree: number | undefined = numbers.find((n) => n > 3);
  const total: number = numbers.reduce((acc, n) => acc + n, 0);
  const hasFive: boolean = numbers.includes(5);

  return (
    <>
      <h1>Metode de array</h1>
      <p>numbers: {numbers.join(", ")}</p>
      <p>map (n * 2): {doubled.join(", ")}</p>
      <p>filter (pare): {evens.join(", ")}</p>
      <p>find (primul &gt; 3): {firstOverThree}</p>
      <p>reduce (suma): {total}</p>
      <p>includes(5): {hasFive.toString()}</p>
    </>
  );
}
