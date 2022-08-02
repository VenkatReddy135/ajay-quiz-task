import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../sharedComponent/Button/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/questions`);
  };

  return (
    <div className="container" style={{ marginLeft: "40%", marginTop: "22%" }}>
      <Button
        handleClick={handleClick}
        buttonValue="Start Quiz"
        buttonClass="btn btn-warning"
      />
    </div>
  );
};

export default React.memo(LandingPage);
