import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Ex10cFindProduct() {
  const [search, setSearch] = useState<string>("mouse");

  const products: Product[] = [
    { id: 1, name: "mouse", price: 80 },
    { id: 2, name: "keyboard", price: 150 },
    { id: 3, name: "monitor", price: 700 }
  ];

  const foundProduct: Product | undefined = products.find(
    (product) => product.name.toLowerCase() === search.toLowerCase()
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Caută produs"
      />

      <p>
        {foundProduct
          ? `${foundProduct.name}: ${foundProduct.price} lei`
          : "Produsul nu există"}
      </p>
    </>
  );
}
