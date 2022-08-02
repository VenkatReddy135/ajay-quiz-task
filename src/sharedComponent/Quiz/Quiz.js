/* eslint-disable react/jsx-no-duplicate-props */
import React, { memo } from "react";
import PropTypes from "prop-types";
import QuestionCmp from "../QuestionCmp/QuestionCmp";
import AnswerOption from "../AnswerOption/AnswerOption";
import QuestionCount from "../QuestionCount/QuestionCount";
import quizQuestions from "../../Api/questions";
import Button from "../Button/Button";

const Quiz = (props) => {
  const renderAnswerOptions = props.answerOptions?.map((key, index) => (
    <AnswerOption
      index={index}
      key={key.content}
      answerContent={key.content}
      questionId={props.questionId}
      selectedAnswer={props.selectedAnswer}
      onAnswerSelected={props.onAnswerSelected}
    />
  ));

  const AnswerOptionRender = memo(() => {
    return <>{renderAnswerOptions}</>;
  });

  return (
    <div key={props.questionId} className="container">
      <QuestionCount
        counter={props.counter}
        counter={props.questionId}
        total={props.questionTotal}
      />
      <QuestionCmp content={props.question} />
      <ul className="answerOptions">{<AnswerOptionRender />}</ul>
      <div className="bottom-footer">
        {props.counter > 0 ? (
          <Button
            buttonClass="btn btn-secondary"
            handleClick={props.setPreviousQuestion}
            buttonValue="Previous"
          />
        ) : (
          <div></div>
        )}

        {props.counter < quizQuestions?.length - 1 ? (
          <Button
            buttonClass={`btn btn-warning buttonMargin`}
            handleClick={props.setNextQuestion}
            buttonValue="Next"
          />
        ) : (
          <div></div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {props.counter === quizQuestions.length - 1 && (
          <Button
            buttonClass="btn btn-info"
            handleClick={props.viewResults}
            buttonValue="Submit"
          />
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  answerOptions: PropTypes.array,
  setNextQuestion: PropTypes.func,
  setPreviousQuestion: PropTypes.func,
  question: PropTypes.string,
  questionId: PropTypes.any,
  counter: PropTypes.number,
  selectedAnswer: PropTypes.any,
  onAnswerSelected: PropTypes.func,
  questionTotal: PropTypes.any,
  viewResults: PropTypes.func,
};

Quiz.defaultProps = {
  setNextQuestion: () => {},
  setPreviousQuestion: () => {},
};
export default React.memo(Quiz);
