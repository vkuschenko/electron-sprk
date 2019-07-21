export interface SideBarItemProps {
  icon?: string;
  iconSize?: number;
  text: string;
  selected?: boolean;
  onClick?(): void;
}

export interface ListItemProps {
  selected?: boolean;
}
