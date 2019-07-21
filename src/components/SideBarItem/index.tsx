import React from "react";
import styled from "styled-components";
import { SideBarItemProps, ListItemProps } from "./types";
import SvgIcon from "../SvgIcon";
import { white, rhino, licorice } from "../../constants/colors";

const Li = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  font-size: 0.875rem;
  background-color: ${({ selected }) => selected && rhino};
  color: ${white};
  cursor: default;

  &:hover {
    background-color: ${licorice};
  }
`;

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  iconSize,
  text,
  ...others
}) => (
  <Li {...others}>
    {icon && <SvgIcon category="sidebar" id={icon} size={iconSize} />}
    {text}
  </Li>
);

export default SideBarItem;
