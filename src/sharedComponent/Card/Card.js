/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div style={{ marginTop: "10em" }}>
      <div className={`card`} style={{ width: "20rem", margin: "auto" }}>
        <div className="card-body">
          <h2 className="card-title">{props.cardTitle}</h2>
          <div className="card-text">
            <>{props.cardText}</>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  cardTitle: PropTypes.string,
  cardText: PropTypes.any,
};

Card.defaultProps = {
  cardTitle: "",
};
