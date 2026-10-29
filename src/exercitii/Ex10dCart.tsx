type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Ex10dCart() {
  const cart: CartItem[] = [
    { id: 1, name: "Caiet", price: 5, quantity: 4 },
    { id: 2, name: "Pix", price: 10, quantity: 5 },
    { id: 3, name: "Carte", price: 50, quantity: 2 }
  ];

  const total: number = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}: {item.quantity} × {item.price} lei ={" "}
            {item.price * item.quantity} lei
          </li>
        ))}
      </ul>

      <h3>Total: {total} lei</h3>
    </>
  );
}
