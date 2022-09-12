import styled from "styled-components";

export const Question = styled.h1`
  color: ${({ theme }) => theme.neutral.blue};
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fontSize.questionLeter};
`;
