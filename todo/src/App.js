import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>
    event.preventDefault();
  console.log(toDo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Writer your to do .."
        /><hr/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
