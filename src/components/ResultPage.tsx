import styled from "styled-components";

import ResultImg from "../assets/images/undraw_winners_ao2o 2.svg";
import { Button } from "../styled/Button.styled";

type Props = {
  score: number;
  resetQuiz: () => void;
};

const ResultPage = ({ score, resetQuiz }: Props) => {
  return (
    <Center>
      <ResultSvg src={ResultImg} alt="you finished that quiz" />
      <Title>Results</Title>
      <Score>
        You got <Count>{score}</Count> correct answers
      </Score>
      <WiderButton onClick={resetQuiz} variant="hollow" styleType="secondary">
        Try Again
      </WiderButton>
    </Center>
  );
};

const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.neutral.darkBlue};
`;

const ResultSvg = styled.img`
  width: 238px;
  height: 136px;
  margin-bottom: 72px;
`;

const Title = styled.h2`
  font-size: 42px;
  line-height: 72px;
  font-weight: 700;
`;

const Score = styled.p`
  margin-bottom: 70px;
`;

const Count = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: rgba(111, 207, 151, 1);
`;

const WiderButton = styled(Button)`
  padding: 18px 60px;
`;

export default ResultPage;
