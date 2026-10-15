type User = {
  id: number;
  name: string;
  age: number;
};

export default function Demo7Lists() {
  const users: User[] = [
    { id: 1, name: "Ana", age: 20 },
    { id: 2, name: "Radu", age: 17 },
    { id: 3, name: "Maria", age: 34 },
  ];

  return (
    <>
      <h1>Liste</h1>
      <p>Total: {users.length} utilizatori</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} ani
          </li>
        ))}
      </ul>
    </>
  );
}
