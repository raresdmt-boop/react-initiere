import { useState } from "react";

export default function Ex4bVotes() {

  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  function incrementLikes(): void {
    setLikes(likes + 1);
  };

  function incrementDislikes(): void {
    setDislikes(dislikes + 1);
  }

  return (
    <>
    <h1>Scor: {likes - dislikes}</h1>

    <button onClick={incrementLikes}>👍 {likes}</button>
    <button onClick={incrementDislikes}>👎 {dislikes}</button>

    </>
  );
}
