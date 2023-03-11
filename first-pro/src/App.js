import './App.css';
import Box from "./component/Box"

function App() {
  let counter = 0
  const increase = () => {
    counter = counter + 1
    console.log("counter는:",counter )
  }
  return (
    <div>
      {/* <Box name="리사" num={1} />
      <Box name="지수" num={2} />
      <Box name="로제" num={3} />
      <Box name="제니" num={4} /> */}
      <div>{counter}</div>
      <button onClick={increase}>클릭 !</button>
    </div>
  );
}

export default App;
