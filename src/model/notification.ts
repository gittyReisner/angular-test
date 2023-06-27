export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'error' | 'success' | 'log';
}
