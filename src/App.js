import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "바위",
    img: "https://gdimg.gmarket.co.kr/463580244/still/600?ver=1631615157",
  },
  scissors: {
    name: "가위",
    img: "https://cdn.imweb. me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper: {
    name: "보",
    img: "https://gdimg.gmarket.co.kr/195177376/still/600?ver=1670470605",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [componentSelect, setcomponentSelect] = useState(null);
  const [result, setresult] = useState(null);

  const play = (userchoice) => {
    setUserSelect(choice[userchoice]);
    let componentchoice = randomChoice();
    setcomponentSelect(componentchoice);
    setresult(judgement(choice[userchoice], componentchoice));
  };
  const judgement = (user, com) => {
    console.log("게임데이터", user.name, com.name);
    if (!user.name || !com.name) {
      return "게임을 시작해주세요";
    }
    if (user.name === com.name) {
      return "비겼습니다!";
    }
    if (
      (user.name === "바위" && com.name === "가위") ||
      (user.name === "보" && com.name === "바위") ||
      (user.name === "가위" && com.name === "보")
    ) {
      return "이겼습니다!";
    } else {
      return "졌습니다!";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomitem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomitem];
    return choice[final];
  };

  return (
    <div>
      <div className="game_name">
        <h1>가위바위보</h1>
      </div>

      <div className="game_UI">
        <Box use="유저" item={userSelect} result={result} />
        <Box use="컴퓨터" item={componentSelect} result={result} />
      </div>

      <div className="game_UI">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
