import React from "react";
import styled from "styled-components";
import { ContentAreaProps } from "./types";
import { jaguar } from "../../constants/colors";

const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0px 0px 12px -3px ${jaguar};
  margin: 0.5rem;
  padding: 0.5rem;
`;

const ContentArea: React.FC<ContentAreaProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ContentArea;
