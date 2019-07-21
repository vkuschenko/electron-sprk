import React from "react";
import styled from "styled-components";
import { SvgIconProps, ISVG } from "./types";
import sidebar from "../../media/icons/sidebar.svg";
import toolbar from "../../media/icons/toolbar.svg";

const SVG = styled.svg<ISVG>`
  margin: 0.25rem;
  width: ${({ size }) => (size ? `${size}px` : "16px")};
  height: ${({ size }) => (size ? `${size}px` : "16px")};
`;

const getSprites = (category: string): string => {
  if (category === "sidebar") return sidebar;
  if (category === "toolbar") return toolbar;
  return "";
};

const SvgIcon: React.FC<SvgIconProps> = ({ category, id, size }) => (
  <SVG size={size}>
    <use xlinkHref={`${getSprites(category)}#${id}`} />
  </SVG>
);

export default SvgIcon;
