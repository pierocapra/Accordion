import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { title, info } = props;
  const [showAnswer, setShowAnswer] = useState(false);

  const showInfo = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button className="btn" onClick={showInfo}>
          {!showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
