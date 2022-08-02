import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const AnswerOption = (props) => {
  return (
    <li className="answerOption" key={props.index} style={{ margin: "2px" }}>
      <Button
        buttonIndex={props.index}
        handleClick={props.onAnswerSelected}
        buttonClass={
          props.selectedAnswer === props.index
            ? "btn btn-success"
            : "btn btn-light"
        }
        buttonValue={props.answerContent}
      />
    </li>
  );
};

AnswerOption.propTypes = {
  index: PropTypes.any,
  selectedAnswer: PropTypes.any,
  onAnswerSelected: PropTypes.any,
};

export default AnswerOption;
