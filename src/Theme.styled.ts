import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: {
    danger: "#EA8282",
    success: "#60BF88",
    neutral: "rgba(249, 168, 38, 1)",
  },
  neutral: {
    blue: "rgba(47, 82, 123, 1)",
    darkBlue: "rgba(29, 53, 93, 1)",
    lightPurple: "rgba(96, 102, 208, 0.7)",
    purple: "rgba(96, 102, 208, 0.8)",
    white: "rgba(255, 255, 255, 1)",
  },
  fonts: {
    poppins: "'Poppins', sans-serif",
    montserrat: "'Montserrat', sans-serif",
  },
  fontSize: {
    header: "36px",
    questionLeter: "24px",
    questionBody: "18px",
    footer: "14px",
  },
};
