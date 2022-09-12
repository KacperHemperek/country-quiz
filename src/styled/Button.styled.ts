import styled, { css } from "styled-components";

type ButtonProps = {
  styleType?: "primary" | "secondary";
  variant?: "hollow" | "full";
};

export const Button = styled.button<ButtonProps>(
  ({ styleType, variant }: ButtonProps) => {
    const variants = {
      full: css`
        border: solid 2px
          ${({ theme }) =>
            styleType === "primary"
              ? theme.primary.neutral
              : theme.neutral.darkBlue};
        background-color: ${({ theme }) =>
          styleType === "primary"
            ? theme.primary.neutral
            : theme.neutral.darkBlue};
        padding: 15px 36px;
        border-radius: 12px;
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.questionBody};
        cursor: pointer;
        color: ${({ theme }) => theme.neutral.white};
        font-family: ${({ theme }) => theme.fonts.poppins};
      `,
      hollow: css`
        border: solid 2px
          ${({ theme }) =>
            styleType === "primary"
              ? theme.primary.neutral
              : theme.neutral.darkBlue};
        background-color: ${({ theme }) => theme.neutral.white};
        padding: 15px 36px;
        border-radius: 12px;
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.questionBody};
        cursor: pointer;
        color: ${({ theme }) =>
          styleType === "primary"
            ? theme.primary.neutral
            : theme.neutral.darkBlue};
        font-family: ${({ theme }) => theme.fonts.poppins};
      `,
    };
    if (!styleType) styleType = "primary";
    if (!variant) variant = "full";

    return variants[variant];
  }
);
