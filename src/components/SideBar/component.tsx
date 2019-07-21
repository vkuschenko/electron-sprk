import React from "react";
import { SideBarProps } from "./types";
import { SideBarContainer, List, Separator } from "./helper-components";
import SideBarItem from "../SideBarItem";

const apps = [
  { id: "inbox", text: "INBOX" },
  { id: "calendar", text: "CALENDAR" }
];
const folders = [
  { id: "sent", text: "Sent" },
  { id: "drafts", text: "Drafts" },
  { id: "pins", text: "Pins" },
  { id: "archive", text: "Archive" }
];

const SideBar: React.FC<SideBarProps> = ({
  selectedItem = "inbox",
  sidebarElementClick
}) => (
  <SideBarContainer>
    <List>
      {apps.map(({ id, text }) => (
        <SideBarItem
          key={id}
          icon={id}
          iconSize={20}
          text={text}
          onClick={() => sidebarElementClick && sidebarElementClick(id)}
          selected={id === selectedItem}
        />
      ))}
      <Separator>Folders</Separator>
      {folders.map(({ id, text }) => (
        <SideBarItem
          key={id}
          icon={id}
          text={text}
          onClick={() => sidebarElementClick && sidebarElementClick(id)}
          selected={id === selectedItem}
        />
      ))}
    </List>
  </SideBarContainer>
);

export default SideBar;
