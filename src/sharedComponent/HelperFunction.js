import quizQuestions from "../Api/questions";

export const Marks = (data) => {
  const values = data?.reduce((partialSum, mark) => partialSum + mark.marks, 0);
  return values;
};

export const totalGainedMarks = (data) => {
  const values = data?.reduce((partialSum, marks) => partialSum + marks, 0);
  return values;
};

export const callSelectedAnswers = (data, e) => {
  let obj = data?.selectedAnswers;
  let index = parseInt(e.target.value);
  let questionIndex = data?.counter;
  obj[questionIndex] = index;
  return obj;
};

export const setQuestion = (obj, questionType) => {
  const counter = questionType === "next" ? obj?.counter + 1 : obj?.counter - 1;
  const questionId =
    questionType === "next" ? obj?.questionId + 1 : obj?.questionId - 1;
  const values = {
    counter: counter,
    questionId: questionId,
    question: quizQuestions[counter].question,
    answerOptions: quizQuestions[counter].answers,
  };
  return values;
};

export const objectLength = (data) => {
  return Object.keys(data)?.length;
};

export const checkAnswers = (data, quizResult) => {
  let answeredItems = [];
  let gainedMarks = [];
  for (let [key, value] of Object.entries(data)) {
    if (value === quizResult[key]?.answerIndex) {
      answeredItems.push("true");
      gainedMarks.push(quizResult[key]?.marks);
    }
  }
  const combinedArray = [answeredItems, gainedMarks];
  return combinedArray;
};
