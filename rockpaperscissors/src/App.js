import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://mblogthumb-phinf.pstatic.net/20120708_164/foxmann_1341709963675FIgOC_PNG/img_2.png?type=w2"
  },
  scissors: {
    name: "Scissors",
    img: "https://mblogthumb-phinf.pstatic.net/20120708_107/foxmann_13417099635705qnOz_PNG/img_1.png?type=w2"
  },
  paper: {
    name: "Paper",
    img: "https://mblogthumb-phinf.pstatic.net/20120708_97/foxmann_1341709963774AGRm9_PNG/img_3.png?type=w2"
  },
};
function App() {
  const [userSelect, setUserSelect] = useState();
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play = (userChoice) => { //userChoice 는 버튼 온클릭 옆에 있는 매개변수(rock,scissors,paper)를 받을게 필요해서 만든거임
    setUserSelect(choice[userChoice]); // setUserSelect = choice에서 userChoice를 들고오는 거임
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main-btn">
        <button className="main-btn1 btn-push btn-size" onClick={() => play("scissors")}>가위</button> 
        <button className="main-btn2 btn-push btn-size" onClick={() => play("rock")}>바위</button>
        <button className="main-btn3 btn-push btn-size" onClick={() => play("paper")}>보자기</button>
        {/* play함수를 바로 실행시키기 때문에 콜백 함수<    () => play("매개변수")     >를 써야함 */}
      </div>
    </div>
  );
}

export default App;
