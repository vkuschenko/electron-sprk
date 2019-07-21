import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import SvgIcon from "./index";

const StoryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0dede;
  padding: 20px;
`;

storiesOf("SvgIcon", module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .add("sidebar - inbox", () => <SvgIcon category="sidebar" id="inbox" />)
  .add("sidebar - calendar", () => <SvgIcon category="sidebar" id="calendar" />)
  .add("sidebar - sent", () => <SvgIcon category="sidebar" id="sent" />)
  .add("sidebar - drafts", () => <SvgIcon category="sidebar" id="drafts" />)
  .add("sidebar - pins", () => <SvgIcon category="sidebar" id="pins" />)
  .add("sidebar - archive", () => <SvgIcon category="sidebar" id="archive" />)
  .add("toolbar - delete", () => <SvgIcon category="toolbar" id="delete" />);
