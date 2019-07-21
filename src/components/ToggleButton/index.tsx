import React, { Component } from "react";
import { ToggleButtonProps, ToggleButtonState } from "./types";
import { Container, Button, Img } from "./helper-components";
import toggleOffIcon from "../../media/icons/toggle-off.svg";
import toggleOnIcon from "../../media/icons/toggle-on.svg";

class ToggleButton extends Component<ToggleButtonProps, ToggleButtonState> {
  constructor(props: ToggleButtonProps) {
    super(props);

    this.state = { toggled: props.toggled || false };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.id !== prevProps.id) {
      this.setState((): any => ({ toggled: this.props.toggled }));
    }
  }

  onClickHandler() {
    const { id, onClick } = this.props;
    const { toggled } = this.state;

    this.setState(() => ({ toggled: !toggled }));
    onClick && onClick(id, !toggled);
  }

  render() {
    const { toggled } = this.state;

    return (
      <Container>
        <span>Is read:</span>
        <Button onClick={this.onClickHandler}>
          <Img src={toggled ? toggleOnIcon : toggleOffIcon} />
        </Button>
      </Container>
    );
  }
}

export default ToggleButton;
