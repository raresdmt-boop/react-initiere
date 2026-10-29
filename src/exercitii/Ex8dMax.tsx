export default function Ex8dMax() {

  function max3(a: number, b: number, c:number): number {
    if( a >= b && a >= c ) {
      return a
    }
    else if ( b >= a && b >= c ) {
      return b
    }
    else {
      return c
    }
  }

  return (
  <>
  <h1>Cel mai mare</h1>
  <p>max(3, 9 , 5) = {max3(3, 9 , 5)}</p>
  <p>max(12, 4, 7) = {max3(12, 4, 7)}</p>
  <p>max(-1, -8, -3) = {max3(-1, -8, -3)}</p>
</>
  )
  ;
}
