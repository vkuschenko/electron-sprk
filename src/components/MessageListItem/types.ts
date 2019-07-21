export interface EmailItem {
  id: number;
  date: Date;
  from: string;
  subject?: string;
  content?: string;
  isRead?: boolean;
  selected?: boolean;
  onClick(): void;
}

export interface ContainerProps {
  selected?: boolean;
}
