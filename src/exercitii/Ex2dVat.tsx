export default function Ex2dVat() {

  const product: string = "Căști";
  const price: number = 100;
  const vat: number = 0.19;

  function priceWithVat(p: number): number {
    return p * vat + p;
  }

  function vatForPrice(p: number): number{
    return p * vat;
  }

  return <>
  <h1>{product}</h1>
  <p>Pret fara TVA: {price}</p>
  <p>TVA: {vatForPrice(price)}</p>
  <p>Preț cu TVA: {priceWithVat(price)}</p>
  </>;
}
