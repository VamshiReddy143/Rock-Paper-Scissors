import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import { useState, useEffect } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [textMsg, setTextMsg] = useState("");

  const [userChoice, setUserChoice] = useState(null);
  const [choiceImage, setChoiceImage] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  const [opponentChoice, setOpponentChoice] = useState(null);

  const opponentTabChoices = [
    <img key={1} className=" object-cover" src={paper} alt="PAPER" />,
    <img key={2} className=" object-cover" src={rock} alt="ROCK" />,
    <img key={3} className=" object-cover" src={scissors} alt="SCISSORS" />,
  ];

  function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 0;
  }

  function Game_Logic() {
    const opponentChoiceAlt = opponentTabChoices[randomNumber]?.props?.alt;

    if (userChoice === opponentChoiceAlt) {
      setTextMsg("It's a draw");
    } else if (
      (userChoice === "PAPER" && opponentChoiceAlt === "ROCK") ||
      (userChoice === "ROCK" && opponentChoiceAlt === "SCISSORS") ||
      (userChoice === "SCISSORS" && opponentChoiceAlt === "PAPER")
    ) {
      setTextMsg("You win!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setTextMsg("You lose!");
      setScore(score)
    }
  }

  useEffect(() => {
    setRandomNumber(getRandomNumber());
    setOpponentChoice(opponentTabChoices[randomNumber]);
    Game_Logic();
    if (userChoice === "PAPER") {
      setChoiceImage(
        <div className="flex justify-center items-center bg-white border-[20px] border-blue-600 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200">
          <img className=" object-cover " src={paper} alt="PAPER" />
        </div>
      );
    } else if (userChoice === "ROCK") {
      setChoiceImage(
        <div className="flex justify-center items-center bg-white border-[20px] border-red-600 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200">
          <img className=" object-cover " src={rock} alt="ROCK" />
        </div>
      );
    } else if (userChoice === "SCISSORS") {
      setChoiceImage(
        <div className="flex justify-center items-center bg-white border-[20px] border-yellow-600 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200">
          <img className=" object-cover " src={scissors} alt="SCISSORS" />
        </div>
      );
    }
  }, [userChoice]);

  return (
    <main className="flex flex-col items-center mt-10 relative">
      {/* Scoreboard Section */}
      <div className="flex flex-row w-auto border border-gray-200 rounded-[15px] justify-between px-4 py-3 md:w-[50rem]">
        <div className="self-center flex flex-col text-3xl font-bold text-white uppercase">
          <span>Rock</span>
          <span>Paper</span>
          <span>Scissors</span>
        </div>

        <div className="border border-transparent bg-white px-10 py-2 rounded-[5px] flex flex-col items-center gap-2">
          <p className="text-blue-500 text-2xl font-bold">Score</p>
          <p className="text-5xl font-extrabold">{score}</p>
        </div>
      </div>

      {/* Game Section */}
      <div className="mt-10 flex flex-col items-center">
        {userChoice === null ? (
          <div>
            <div className="mt-20 flex flex-col items-center">
              <div className="flex flex-wrap gap-10">
                <button
                  onClick={() => setUserChoice("PAPER")}
                  className="flex justify-center items-center bg-white border-[10px] border-blue-500 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200"
                >
                  <img src={paper} alt="PAPER" />
                </button>

                <button
                  onClick={() => setUserChoice("SCISSORS")}
                  className="flex justify-center items-center bg-white border-[10px] border-yellow-500 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200"
                >
                  <img src={scissors} alt="SCISSORS" />
                </button>
              </div>

              <button
                onClick={() => setUserChoice("ROCK")}
                className="flex justify-center items-center bg-white border-[10px] border-red-500 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200 mt-5"
              >
                <img src={rock} alt="ROCK" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center items-center gap-10 md:w-[40rem]">
              {/* User's Choice */}
              <div className="flex flex-col items-center  gap-3">
                <h2 className="text-white mt-[50px] mb-[30px] font-bold">YOU PICKED</h2>
               {choiceImage}
              </div>

              {/* Message and Play Again Button in the Center */}
              <div className="flex flex-col items-center gap-5 mt-[90px] font-bold">
                <p className="text-white text-3xl font-bold">{textMsg}</p>
                <button
                  onClick={() => setUserChoice(null)}
                  className="border border-white bg-white font-semibold text-[20px] px-9 py-2 rounded-[5px] text-black  duration-200"
                >
                  PLAY AGAIN
                </button>
              </div>

              {/* Opponent's Choice */}
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-white mt-[50px] mb-[30px] font-bold">THE HOUSE PICKED</h2>
                <div className="flex justify-center items-center bg-white border-[20px] border-red-600 h-[150px] w-[150px] rounded-[50%] hover:translate-y-[-5px] duration-200">
                  {opponentChoice}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Bottom Right Button */}
      <button
        onClick={() => alert("Bottom Right Button Clicked!")}
        className="fixed bottom-5 border border-white right-5 bg-transparent text-white px-8 py-2 rounded-xl shadow-lg hover:bg-blue-700 duration-200"
      >
        Rules
      </button>
    </main>

  );
}