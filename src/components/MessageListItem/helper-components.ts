import styled from "styled-components";
import { ContainerProps } from "./types";
import {
  gainsboro,
  white,
  stormGrey,
  jaguar,
  lavender,
  lightSkyBlue,
  royalBlue
} from "../../constants/colors";
import { sans } from "../../constants/fonts";

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: stretch;
  padding: 0.5rem 0;
  width: 100%;
  border-top: 1px solid ${({ selected }) => (selected ? lightSkyBlue : white)};
  border-bottom: 1px solid
    ${({ selected }) => (selected ? lightSkyBlue : gainsboro)};
  background-color: ${({ selected }) => (selected ? lavender : white)};
  color: ${jaguar};
  cursor: default;

  &:hover {
    background-color: ${lavender};
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  min-width: 2rem;
`;

export const RightColumn = styled.div`
  min-width: 0;
  margin-right: 1rem;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  font: 700 1rem ${sans};
  margin-bottom: 0.5rem;
`;

export const From = styled.div`
  width: 100%;
`;

export const Date = styled.div`
  font: 400 0.5rem ${sans};
  color: ${stormGrey};
`;

export const Row2 = styled.div`
  font: 700 0.75rem ${sans};
  margin-bottom: 0.5rem;
`;

export const Row3 = styled.div`
  font: 400 0.75rem ${sans};
  width: 100%;
  color: ${stormGrey};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Circle = styled.div`
  margin-top: 5.5px;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${royalBlue};
  border-radius: 50%;
`;
