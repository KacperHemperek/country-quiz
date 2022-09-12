export interface QuestionType {
  type: "capital" | "flag";
  q: string;
  answer: string;
  allAnswers: string[];
  imgUrl?: string;
}
