import React from "react";
import styled, { css } from "styled-components";
import { MdCheckCircleOutline, MdHighlightOff } from "react-icons/md";

type AnswerProps = {
  type: AnswerTypes;
  answer: string;
  answerBody: string;
  checkAnswer: () => void;
};

export type AnswerTypes = "success" | "danger" | "neutral" | "neutralNoHover";
const Answer = ({ answer, answerBody, type, checkAnswer }: AnswerProps) => {
  return (
    <StyledAnswer type={type} onClick={checkAnswer}>
      <StyledLeter>{answer}</StyledLeter>
      <StyledBody> {answerBody}</StyledBody>

      <IconWrapper>
        {type === "danger" ? (
          <MdHighlightOff />
        ) : type === "success" ? (
          <MdCheckCircleOutline />
        ) : null}
      </IconWrapper>
    </StyledAnswer>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  width: 20px;
  height: 20px;
  top: 50%;
  translate: 0 -50%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

type StyledAnswerProps = {
  type: AnswerTypes;
};

const variantOption = {
  neutral: css`
    border: 2px solid ${({ theme }) => theme.neutral.lightPurple};
    color: ${({ theme }) => theme.neutral.purple};
    cursor: pointer;
    &:hover {
      border-color: ${({ theme }) => theme.primary.neutral};
      background-color: ${({ theme }) => theme.primary.neutral};
      color: ${({ theme }) => theme.neutral.white};
    }
  `,
  neutralNoHover: css`
    border: 2px solid ${({ theme }) => theme.neutral.lightPurple};
    color: ${({ theme }) => theme.neutral.purple};
  `,

  danger: css`
    border: 2px solid ${({ theme }) => theme.primary.danger};
    color: ${({ theme }) => theme.neutral.white};
    background-color: ${({ theme }) => theme.primary.danger};
    fill: ${({ theme }) => theme.neutral.white};
  `,
  success: css`
    border: 2px solid ${({ theme }) => theme.primary.success};
    background-color: ${({ theme }) => theme.primary.success};
    color: ${({ theme }) => theme.neutral.white};
    fill: ${({ theme }) => theme.neutral.white};
  `,
};

const StyledAnswer = styled.div<StyledAnswerProps>`
  position: relative;
  display: flex;
  gap: 45px;
  padding: 8px 20px;
  border-radius: 12px;
  align-items: center;
  transition: all 0.1s ease-in;

  ${({ type }) => variantOption[type]}
`;

const StyledLeter = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.questionLeter};
  line-height: 36px;
`;

const StyledBody = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.questionBody};
  line-height: 27px;
`;

export default Answer;
