import React from "react";
import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";
import { storiesOf } from "@storybook/react";
import MessageListItem from "./index";

const email1 = {
  id: 0,
  date: new Date(),
  from: "vkuschenko@gmail.com",
  subject: "Some test subject",
  content: loremIpsum({
    count: 5,
    format: "plain",
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    units: "paragraphs"
  }),
  isRead: false
};

const email2 = {
  ...email1,
  id: 1,
  isRead: true
};

const Container = styled.div`
  width: 300px;
`;

storiesOf("MessageListItem", module)
  .add("Not read", () => (
    <Container>
      <MessageListItem {...email1} />
    </Container>
  ))
  .add("Read", () => (
    <Container>
      <MessageListItem {...email2} />
    </Container>
  ));
