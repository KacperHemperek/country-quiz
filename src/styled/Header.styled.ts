import styled, { css } from "styled-components";

type HeaderProps = {
  noImg?: boolean;
};

export const Header = styled.header<HeaderProps>`
  position: relative;
  color: ${({ theme }) => theme.neutral.white};
  line-height: 54px;
  font-size: ${({ theme }) => theme.fontSize.header};
  margin-bottom: 10px;
  font-weight: 700;

  ${({ noImg }) =>
    noImg &&
    css`
      img {
        display: none;
      }
    `}
`;
