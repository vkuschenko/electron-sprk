export interface SideBarProps {
  selectedItem?: string;
  sidebarElementClick?(item: string): void;
}

interface Sidebar {
  selectedItem: string;
}

export interface Store {
  sidebar: Sidebar;
}
