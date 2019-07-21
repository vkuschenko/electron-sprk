import styled from "styled-components";
import { midnightExpress, slateGrey } from "../../constants/colors";

export const SideBarContainer = styled.nav`
  background-color: ${midnightExpress};
  width: 200px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Separator = styled.li`
  font-size: 0.75rem;
  margin: 1rem 0 0 1.25rem;
  color: ${slateGrey};
  cursor: default;
`;
