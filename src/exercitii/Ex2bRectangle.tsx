export default function Ex2bRectangle() {

  const width: number = 5;
  const height: number = 3;

  function area(w: number, h: number): number{
    return w * h;
  }

  function perimeter(w:number, h:number): number{
    return 2 * (w + h);
  }

  return <>
<h1>Dreptunghi: {width} x {height}</h1>
<p>Aria: {area(width, height)}</p>
<p>Perimetrul: {perimeter(width, height)}</p>
</>
  ;
}
