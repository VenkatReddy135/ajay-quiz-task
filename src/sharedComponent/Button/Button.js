/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      className={props.buttonClass}
      value={props.buttonIndex}
    >
      {props.buttonValue}
    </button>
  );
}

Button.propTypes = {
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func,
  buttonValue: PropTypes.string,
  buttonIndex: PropTypes.any,
};

Button.defaultProps = {
  buttonIndex: "",
  buttonValue: "",
};
