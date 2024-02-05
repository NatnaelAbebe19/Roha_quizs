import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Data from "./assets/Data";
import WelcomePage from "./components/WelcomePage";
import Confetti from "react-confetti";
import "./App.css";
// import Confetti from "react-confetti/dist/types/Confetti";

function App() {
  const [questions, setQuestions] = useState(Data);
  const [display, setDisplay] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function handleClick() {
    setDisplay(true);
  }

  function handleSubmit() {
    if (!checkAnswers) {
      setCheckAnswers(true);
    } else {
      setCheckAnswers(false);
      setDisplay(false);
      setCorrectAnswers(0);
    }
  }

  useEffect(() => {
    // setCorrectAnswers((preNum) => preNum + 1);
  }, [setCorrectAnswers]);

  return (
    <div className="container">
      {display ? (
        <>
          {correctAnswers >= 4 && <Confetti />}
          <div className="question--container">
            {questions.map((quiz) => (
              <Questions
                key={quiz.question}
                question={quiz.question}
                correct={quiz.correct_answer}
                choice={quiz.incorrect_answers}
                checkAnswers={checkAnswers}
                setCorrectAnswers={setCorrectAnswers}
              />
            ))}
          </div>
          {checkAnswers && (
            <div className="answered">
              You have answered {correctAnswers} correctly.
            </div>
          )}
          <button className="question-check" onClick={handleSubmit}>
            {checkAnswers ? "Play again" : "Check Answers"}
          </button>
        </>
      ) : (
        <WelcomePage handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
