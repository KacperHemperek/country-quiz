import { useCallback, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import useSWR from "swr";

import Logo from "./assets/images/undraw_adventure_4hum 1.svg";

import { theme } from "./Theme.styled";

import { shuffleArray } from "./helpers/shuffleArray";

import { GlobalStyles } from "./Global.styled";
import { Header } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import { Card } from "./styled/Card.styled";
import { Question } from "./styled/Question.styled";
import { Answers } from "./styled/Answers.styled";
import { QuestionType } from "./interface/Question.type";
import { Button } from "./styled/Button.styled";
import Answer, { AnswerTypes } from "./components/Answer";
import ResultPage from "./components/ResultPage";

const fetcher = (url: string, deps: any) =>
  fetch(url, deps).then((res) => res.json());

function App() {
  const { data: allCountries, error: allError } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);
  const [clickedAnswer, setClickedAnswer] = useState<string>("");

  const createFlagQuestion = useCallback((data: any[]) => {
    let answerData = data[Math.floor(Math.random() * data.length)];
    if (!answerData.capital) {
      answerData = data[Math.floor(Math.random() * data.length)];
    }
  }, []);

  const createCapitalQuestion = (
    data: any[],
    type: "capital" | "flag"
  ): QuestionType => {
    let answerData = data[Math.floor(Math.random() * data.length)];
    if (!answerData.capital) {
      answerData = data[Math.floor(Math.random() * data.length)];
    }

    let wrongAnswers: string[] = [];

    for (let i = 0; i < 3; i++) {
      let answer = data[Math.floor(Math.random() * data.length)].name.common;
      while ([...wrongAnswers, answerData.name.common].includes(answer)) {
        answer = data[Math.floor(Math.random() * data.length)].name.common;
      }
      wrongAnswers.push(answer);
    }

    if (type === "capital") {
      return {
        type: "capital",
        q: `${answerData.capital} is capital of `,
        answer: answerData.name.common,
        allAnswers: shuffleArray<string>([
          ...wrongAnswers,
          answerData.name.common,
        ]),
      };
    } else {
      return {
        type: "flag",
        q: `Which country does this flag belong to?`,
        answer: answerData.name.common,
        allAnswers: shuffleArray<string>([
          ...wrongAnswers,
          answerData.name.common,
        ]),
        imgUrl: answerData.flags.png,
      };
    }
  };

  const checkAnswer = useCallback(
    (a: string) => {
      if (answered) return;

      setAnswered(true);
      setClickedAnswer(a);

      if (a === questions[currentIndex].answer) {
        setRightAnswers((prev) => (prev += 1));
      }
    },
    [questions, currentIndex, answered]
  );

  const nextQ = useCallback(() => {
    setAnswered(false);
    setClickedAnswer("");
    setCurrentIndex((prev) => (prev += 1));
  }, []);

  const answerType = useCallback(
    (a: string): AnswerTypes => {
      if (answered && a === questions[currentIndex].answer) {
        return "success";
      }
      if (answered && a === clickedAnswer) {
        return "danger";
      }
      if (answered) {
        return "neutralNoHover";
      }

      return "neutral";
    },
    [questions, currentIndex, clickedAnswer]
  );

  const createQuesitons = useCallback((data: any[]): QuestionType[] => {
    let returnAnswers: QuestionType[] = [];

    for (let i = 0; i < 2; i++) {
      returnAnswers.push(createCapitalQuestion(data, "capital"));
      returnAnswers.push(createCapitalQuestion(data, "flag"));
    }

    return returnAnswers.sort();
  }, []);
  const resetQuiz = () => {
    setAnswered(false);
    setClickedAnswer("");
    setCurrentIndex(0);
    setRightAnswers(0);

    setQuestions(createQuesitons(allCountries));
  };

  useEffect(() => {
    if (allCountries) {
      setQuestions(createQuesitons(allCountries));
    }
  }, [allCountries]);

  const answerLetters = ["A", "B", "C", "D"];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <TopPageHeader
          noImg={currentIndex === questions.length && currentIndex !== 0}
        >
          <TextOnTop>COUNTRY QUIZ</TextOnTop>
          <StyledSvg src={Logo} />
        </TopPageHeader>
        <Card>
          <Spacing />
          {questions?.length ? (
            !(currentIndex === questions.length && currentIndex !== 0) ? (
              <>
                {questions[currentIndex].type === "flag" && (
                  <Flag
                    src={questions[currentIndex].imgUrl}
                    alt="country flag"
                  />
                )}
                <Question>{questions[currentIndex]?.q ?? null}</Question>
                <Answers>
                  {questions.length
                    ? questions[currentIndex]?.allAnswers?.map(
                        (item, index) => {
                          const temp = answerType(item);
                          return (
                            <Answer
                              key={item + index}
                              checkAnswer={() => checkAnswer(item)}
                              answer={answerLetters[index]}
                              answerBody={item}
                              type={temp}
                            />
                          );
                        }
                      )
                    : null}
                </Answers>
                {answered && <Button onClick={nextQ}>Next</Button>}
              </>
            ) : (
              <ResultPage resetQuiz={resetQuiz} score={rightAnswers} />
            )
          ) : (
            <Question>Loading...</Question>
          )}
        </Card>
      </Container>
    </ThemeProvider>
  );
}

const Spacing = styled.div`
  margin-top: 32px;
`;

const Flag = styled.img`
  height: 54px;
`;

const StyledSvg = styled.img`
  display: none;
  width: 162px;
  height: 116px;
  position: absolute;
  right: 0;
  translate: 0 -10px;

  @media (min-width: 767px) {
    display: inline;
  }
`;

const TopPageHeader = styled(Header)`
  z-index: 50;
`;

const TextOnTop = styled.span`
  z-index: 50;
`;

export default App;
