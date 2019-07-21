import { EmailItem } from "../MessageListItem/types";

export interface MessageListItemProps {
  emails?: EmailItem[];
  activeEmail?: number;
  setActiveEmail?(id: number): void;
}

export interface Store {
  emails: any;
  sidebar: any;
  activeEmail: number;
}

export interface Email {
  folder: string;
}
