export interface User {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  role?: 'customer' | 'admin' | string;
  avatar?: string;
  creationAt?: string;
  updatedAt?: string;
}
