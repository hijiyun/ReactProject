import { useState, useEffect } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  console.log("rnders")
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value+2)
    console.log("counter는: ", counter, "counter2는:", counter2);
  };

  useEffect(() => {
    console.log("useEffect1 fireeee");
  }, []);
  
  useEffect(() => {
    console.log("useEffect2 Firrrrr",counter2);
  }, [counter2])
  
  useEffect(() => {
    console.log("다른 내용 하고싶어요", value);
  }, [value]);

  return (
    <div>
      {/* <Box name="리사" num={1} />
      <Box name="지수" num={2} />
      <Box name="로제" num={3} />
      <Box name="제니" num={4} /> */}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭 !</button>
    </div>
  );
}

export default App;
