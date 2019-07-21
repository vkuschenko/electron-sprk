import styled from "styled-components";
import { whiteSmoke } from "../../constants/colors";
import { sans } from "../../constants/fonts";

export const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 9999;
  padding: 0.5rem;
  background-color: ${whiteSmoke};
`;

export const Subject = styled.h1`
  font: 700 1rem ${sans};
  margin: 1rem 0.5rem;
`;
