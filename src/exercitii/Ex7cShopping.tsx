export default function Ex7cShopping() {

  const items: string[] = [
    "Lapte",
    "Paine",
    "Oua",
    "Mere",
    "Carne"
  ];

  return (
    <>
    <h1> Cumparaturi ({items.length})</h1>

    <ul>
        {
          items.map(it=><li key={it}>{it}</li>)
        }
      
    </ul>
    </>
  );
}
