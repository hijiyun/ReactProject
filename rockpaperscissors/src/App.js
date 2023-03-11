import { useState } from "react";
import './App.css';
import Box from "./component/Box"

//1.박스 2개(타이틀, 사진, 결과)
//2. 가위바위보 버튼이 박스 아래에 있음
//3. 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3번 4번 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다. 
// 이기면-초록, 지면-빨강, 비기면-노랑

const choice = {
  rock: {
    name: "rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  paper: {
    name: "paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
  scissors: {
    name: "scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
}; 
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [ComputerSelsct, setComputerSelsct] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let ComputerChoice = randomChoice()
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 array로 만들어주는 함수이다.
    console.log("item Ayyay: ", itemArray);
    let randomItem = Math.random()
    console.log("랜덤값: ",randomItem)
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={ userSelect } />
        <Box title="Computer" item={ ComputerSelsct } />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
