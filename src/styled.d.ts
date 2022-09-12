import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      success: string;
      danger: string;
      neutral: string;
    };
    neutral: {
      darkBlue: string;
      blue: string;
      white: string;
      lightPurple: string;
      purple: string;
    };
    fontSize: {
      header: string;
      questionBody: string;
      questionLeter: string;
      footer: string;
    };
    fonts: {
      poppins: string;
      montserrat: string;
    };
  }
}
