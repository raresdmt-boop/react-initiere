export default function Ex10aVatPrices() {
  const prices: number[] = [10, 25, 40, 100];

  const withVat: number[] = prices.map((price) =>
    Math.round(price * 1.19)
  );

  return (
    <>
      <p>Fără TVA: {prices.join(", ")}</p>
      <p>Cu TVA: {withVat.join(", ")}</p>
    </>
  );
}
