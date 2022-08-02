import React, { useState, useEffect, memo } from "react";
import quizQuestions from "../../Api/questions";
import Quiz from "../../sharedComponent/Quiz/Quiz";
import Result from "../../sharedComponent/Result";
import Timer from "../../sharedComponent/Timer/Timer";
import {
  callSelectedAnswers,
  setQuestion,
} from "../../sharedComponent/HelperFunction";

const Questions = () => {
  const initialState = {
    questionId: 1,
    question: "",
    answerOptions: [],
    allQuestions: [],
    counter: 0,
    selectedAnswers: {},
    result: "",
  };
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    setInput((prevState) => ({
      ...prevState,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      allQuestions: quizQuestions,
    }));
  }, []);

  const handleAnswerSelected = (e) => {
    let answerObject = callSelectedAnswers(input, e);
    setInput((prevState) => ({
      ...prevState,
      selectedAnswers: answerObject,
    }));
  };

  const setNextQuestion = () => {
    const next = "next";
    let nextQuestion = setQuestion(input, next);
    setInput((prevState) => ({
      ...prevState,
      ...nextQuestion,
    }));
  };

  const setPreviousQuestion = () => {
    const previous = "previous";
    let previousQuestion = setQuestion(input, previous);
    setInput((prevState) => ({
      ...prevState,
      ...previousQuestion,
    }));
  };

  const ResultDetails = memo(() => {
    return (
      <Result quizResult={input.allQuestions} answers={input.selectedAnswers} />
    );
  });

  const viewResults = () => {
    setInput((prevState) => ({
      ...prevState,
      result: true,
    }));
  };

  const QuizDetails = () => {
    return (
      <Quiz
        viewResults={viewResults}
        setNextQuestion={setNextQuestion}
        counter={input.counter}
        setPreviousQuestion={setPreviousQuestion}
        selectedAnswer={input.selectedAnswers[input.counter]}
        answerOptions={input.answerOptions}
        questionId={input.questionId}
        question={input.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  };

  return input.result ? (
    <ResultDetails />
  ) : (
    <>
      <Timer viewResults={viewResults} /> <QuizDetails />
    </>
  );
};

export default React.memo(Questions);
