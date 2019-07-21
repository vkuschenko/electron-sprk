import React from "react";
import styled from "styled-components";
import SvgIcon from "../SvgIcon";
import { white } from "../../constants/colors";

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 0.5rem;
  padding: 0;
  background-color: ${white};
  border: 0;
  border-radius: 50%;
`;

interface ToolbarButtonProps {
  icon: string;
  onClick?(): void;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon, onClick }) => (
  <Button onClick={onClick}>
    <SvgIcon category="toolbar" id={icon} size={20} />
  </Button>
);

export default ToolbarButton;
