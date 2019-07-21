import React from "react";
import {
  Container,
  LeftColumn,
  RightColumn,
  Row1,
  From,
  Date,
  Row2,
  Row3,
  Circle
} from "./helper-components";
import { EmailItem } from "./types";

const MessageListItem: React.FC<EmailItem> = ({
  date,
  from,
  subject,
  content,
  isRead,
  selected,
  onClick
}) => (
  <Container selected={selected} onClick={onClick}>
    <LeftColumn>{!isRead && <Circle />}</LeftColumn>
    <RightColumn>
      <Row1>
        <From>{from}</From>
        <Date>{date.toLocaleDateString()}</Date>
      </Row1>
      <Row2>{subject}</Row2>
      <Row3>{content}</Row3>
    </RightColumn>
  </Container>
);

export default MessageListItem;
