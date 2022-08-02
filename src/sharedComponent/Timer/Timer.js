import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const Timer = (props) => {
  const [time, setTime] = useState(200000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const timeLeft = {
    minutes: Math.floor(time / 60 / 1000) % 60,
    seconds: Math.floor(time / 1000) % 60,
  };

  if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    props.viewResults();
  }

  return (
    <div
      className="container"
      style={{ marginTop: "2em", marginBottom: "1em" }}
    >
      <Button
        buttonClass="btn btn-info"
        buttonValue={`${timeLeft.minutes}:${timeLeft.seconds}`}
      />
    </div>
  );
};
export default Timer;
