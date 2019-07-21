import React from "react";
import { MessageViewProps } from "./types";
import { Container, Subject } from "./helper-components";
import Toolbar from "../Toolbar";
import ContentArea from "../ContentArea";

const MessageView: React.FC<MessageViewProps> = ({
  email = null,
  deleteEmail,
  toggleEmailRead
}) =>
  email && (
    <Container>
      <Toolbar
        id={email.id}
        isRead={email.isRead}
        onDelete={() => deleteEmail && deleteEmail(email.id)}
        onToggleRead={toggleEmailRead}
      />
      <Subject>{email.subject}</Subject>
      <ContentArea>{email.content}</ContentArea>
    </Container>
  );

export default MessageView;
