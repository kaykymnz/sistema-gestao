export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  storageUsed?: number;
  storageLimit?: number;
  actions?: UserAction[];
}

export interface UserAction {
  icon: string;
  label: string;
  action: string;
}
