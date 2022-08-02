import { Marks, totalGainedMarks } from "./HelperFunction";
import quizQuestions from "../Api/questions";

const gainedMarks = [1, 4, 5];

test("Total marks should be defined", () => {
  expect(Marks(quizQuestions)).toBe(33);
});

test("Obtained marks should be defined", () => {
  expect(totalGainedMarks(gainedMarks)).toBe(10);
});
