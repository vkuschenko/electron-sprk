import React, { Component } from "react";
import { AppProps } from "./types";
import { AppContainer } from "./helper-components";
import SideBar from "../SideBar";
import MessageList from "../MessageList";
import MessageView from "../MessageView";

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <AppContainer>
        <SideBar />
        <MessageList />
        <MessageView />
      </AppContainer>
    );
  }
}

export default App;
