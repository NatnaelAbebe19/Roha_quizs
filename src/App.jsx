import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Data from "./assets/Data";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(Data);
  const [display, setDisplay] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [count, setCount] = useState(0);
  function handleClick() {
    setDisplay(true);
  }

  function handleSubmit() {
    setCheckAnswers(true);
  }
  console.log(count);
  const question = questions.map((quiz) => (
    <Questions
      key={quiz.question}
      question={quiz.question}
      correct={quiz.correct_answer}
      choice={quiz.incorrect_answers}
      checkAnswers={checkAnswers}
    />
  ));
  return (
    <div className="container">
      {display ? (
        <>
          <div className="question--container">{question} </div>
      {checkAnswers && <div className="answered">you have answered</div>}
          <button className="question-check" onClick={handleSubmit}>
            Check answsers
          </button>
        </>
      ) : (
        <WelcomePage handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
