export interface ToggleButtonProps {
  id: number;
  toggled: boolean;
  onClick?(id: number, toggled: boolean): void;
}

export interface ToggleButtonState {
  toggled: boolean;
}
