export default function Ex2cTemperature() {
  const celsius: number = 25;

  function toFahrenheit(c:number): number {
    return c* 9 / 5 + 32;
  }
  
  return <>
  <p> 25°C = {toFahrenheit(celsius)}°F</p>
  <p> 0°C = {toFahrenheit(0)}°F</p>  
  <p> 100°C = {toFahrenheit(100)}°F</p>  
  </>;
}
