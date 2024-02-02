import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Data from "./assets/Data";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(Data);
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setDisplay(true);
  }

  const question = questions.map((quiz) => (
    <Questions
      // key={quiz.question}
      question={quiz.question}
      correct={quiz.correct_answer}
      choice={quiz.incorrect_answers}
    />
  ));
  return (
    <div className="container">
      {display ? (
        <div className="question--container">{question}</div>
      ) : (
        <WelcomePage handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
