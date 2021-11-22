import React from "react";
import data from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Question And Answer About Login</h3>
        <section className="info">
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
