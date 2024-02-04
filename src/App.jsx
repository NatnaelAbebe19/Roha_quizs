import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Data from "./assets/Data";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(Data);
  const [display, setDisplay] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function handleClick() {
    setDisplay(true);
  }

  function handleSubmit() {
    setCheckAnswers(true);
  }

  useEffect(() => {
    if (checkAnswers) {
      let count = 0;
      questions.forEach((quiz) => {
        const { correct_answer, incorrect_answers } = quiz;
        const mergedArray = [...incorrect_answers, correct_answer];
        let selectedAnswers = [];
        Object.keys(quiz).forEach((key) => {
          if (key.startsWith("answer") && quiz[key]) {
            selectedAnswers.push(mergedArray[parseInt(key.slice(-1))]);
          }
        });
        if (
          selectedAnswers.length === 1 &&
          selectedAnswers[0] === correct_answer
        ) {
          count = count + 1;
        }
      });
      setCorrectAnswers(count);
    }
  }, [checkAnswers, questions]);

  return (
    <div className="container">
      {display ? (
        <>
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
