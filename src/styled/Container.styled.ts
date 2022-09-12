import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  max-width: 464px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;

  @media (min-width: 475px) {
    padding: 0;
  }
`;
