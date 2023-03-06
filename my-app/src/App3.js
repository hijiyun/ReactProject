import { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  return (
  <div>
    <input type="text" placeholder="write your to do .." />
  </div>
  );
}

export default Todo;