import React, { useState } from "react";
import data from "./data/data";
import Questions from "./Questions";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function App() {
  // set up my useState
  const [questions, setQuestions] = useState(data);

  // console.log(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
        <footer>
          <h4>Please visit my personal links</h4>
          <div className='links'>
            <a href='https://github.com/seth808rose'>
              <AiFillGithub />
            </a>
            <a href='https://twitter.com/rose_seta'>
              <AiFillTwitterCircle />
            </a>
            <a href='https://www.linkedin.com/in/seta-rose-33014219a/'>
              <AiFillLinkedin />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
