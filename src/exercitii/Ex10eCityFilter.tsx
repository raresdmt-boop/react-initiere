import { useState } from "react";

export default function Ex10eCityFilter() {
  const [text, setText] = useState<string>("");

  const cities: string[] = [
    "Bacău",
    "București",
    "Brașov",
    "Cluj",
    "Iași",
    "Timișoara"
  ];

  const filteredCities: string[] = cities.filter((city) =>
    city.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Caută un oraș"
      />

      <h3>Orașe găsite: {filteredCities.length}</h3>

      {filteredCities.length > 0 ? (
        <ul>
          {filteredCities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      ) : (
        <p>Niciun oraș găsit.</p>
      )}
    </>
  );
}
