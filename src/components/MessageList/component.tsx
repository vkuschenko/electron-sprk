import React from "react";
import styled from "styled-components";
import { MessageListItemProps } from "./types";
import MessageListItem from "../MessageListItem";
import { jaguar } from "../../constants/colors";

const MessageListContainer = styled.div`
  width: 300px;
  height: 100vh;
  border-right: 1px solid ${jaguar};
  overflow-y: auto;
`;

const MessageList: React.FC<MessageListItemProps> = ({
  emails = [],
  activeEmail,
  setActiveEmail
}) => (
  <MessageListContainer>
    {emails.map(email => (
      <MessageListItem
        key={email.id}
        selected={email.id === activeEmail}
        onClick={() => setActiveEmail && setActiveEmail(email.id)}
        {...email}
      />
    ))}
  </MessageListContainer>
);

export default MessageList;
