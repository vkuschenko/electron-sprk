import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import ToolbarButton from "./index";

const StoryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0dede;
  padding: 20px;
`;

storiesOf("ToolbarButton", module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .add("delete", () => (
    <StoryWrapper>
      <ToolbarButton icon="delete" />
    </StoryWrapper>
  ));
