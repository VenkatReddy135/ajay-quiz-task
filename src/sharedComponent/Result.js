import React, { memo } from "react";
import Card from "./Card/Card";
import {
  Marks,
  totalGainedMarks,
  objectLength,
  checkAnswers,
} from "../sharedComponent/HelperFunction";

const Result = (props) => {
  let Mark = Marks(props.quizResult);
  let answeredItems = [];
  let gainedMarks = [];

  if (objectLength(props.answers)) {
    const answerDetails = checkAnswers(props.answers, props.quizResult);
    answeredItems = answerDetails[0];
    gainedMarks = answerDetails[1];
  }

  let totalObtainedMarks = totalGainedMarks(gainedMarks);

  const resultArray = [
    {
      id: 1,
      title: "Total Number Of Questions :",
      value: `${props.quizResult?.length}`,
    },
    {
      id: 2,
      title: "Question Attempted :",
      value: `${Object.keys(props.answers)?.length}`,
    },
    { id: 3, title: " Correct Answers: ", value: `${answeredItems?.length}` },
    {
      id: 4,
      title: "In-correct Answers:",
      value: `${Object.keys(props.answers)?.length - answeredItems?.length}`,
    },
    { id: 5, title: "Total Marks:", value: `${Mark}` },
    { id: 6, title: "Obtained Marks:", value: `${totalObtainedMarks}` },
  ];

  const elements = resultArray?.map((el) => (
    <p key={el.id}>
      {el.title}
      {el.value}
    </p>
  ));

  const CardData = memo(() => {
    return <>{elements}</>;
  });

  return <Card cardTitle="Results" cardText={<CardData />} />;
};

export default Result;
