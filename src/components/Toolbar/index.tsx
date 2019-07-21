import React from "react";
import styled from "styled-components";
import ToolbarButton from "../ToolbarButton";
import ToggleButton from "../ToggleButton";

const Container = styled.div`
  display: flex;
`;

interface ToolbarProps {
  id: number;
  isRead: boolean;
  onDelete?(): void;
  onToggleRead?(id: number, isRead: boolean): void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  id,
  isRead,
  onDelete,
  onToggleRead
}) => (
  <Container>
    <ToolbarButton icon="delete" onClick={onDelete} />
    <ToggleButton id={id} toggled={isRead} onClick={onToggleRead} />
  </Container>
);

export default Toolbar;
