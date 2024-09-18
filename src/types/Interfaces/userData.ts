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
  addEvent: (newEvent: { title: string; start: Date; end: Date }) => void;
}

export interface IEvent {
  title: string;
  start: Date;
  end: Date;
  site?: string; // Added for site
  actualStart?: string; // Added for actual start time
  actualEnd?: string; // Added for actual end time
  profilePicture?: string; // Added for profile picture
  employeeName?: string; // Added for employee name
  isDeleted?: boolean;
}

export interface IeventInfo {
  timeText: string;
  event: IEvent;
}

export interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: IEvent | null;
}
