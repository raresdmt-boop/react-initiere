type Task = {
  id: number,
  title: string
};

import { useState } from "react";
export default function Ex7eTodo() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");

  function addTask(): void {
    setTasks([
      ...tasks,
      {
        id: Date.now(), title: title
      }
    ]);
    setTitle("");
  }

  return (
    <>
    <input
    value={title}
    onChange = {(e) => setTitle(e.target.value)}>
    </input>
    <button onClick = {addTask}>Adaugă</button>
    <h1>
      Sarcini: {tasks.length}
    </h1>
    {tasks.length === 0 ? (
      <p>Nicio sarcină</p>
    ) : (
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    )}
    </>
  );
}
