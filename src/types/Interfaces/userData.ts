// types.ts (or interfaces.ts)
export interface IUserData {
  name: { first: string; last: string };
  picture: { large: string };
}

export interface StateProps {
  results: IUserData[];
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: StateProps;
}
export interface IeventInfo {
  timeText: string;
  event: { title: string };
}
export interface IEvent {
  title: string;
  start: Date;
  end: Date;
}
