export interface MessageViewProps {
  email?: any;
  deleteEmail?(id: number): void;
  toggleEmailRead?(id: number, isRead: boolean): void;
}
