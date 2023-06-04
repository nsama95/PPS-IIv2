export type Roles = 'EMPLEADO' | 'CLIENTE' | 'ADMIN';
export interface UserApp {
    uid: string;
  email: string;
  displayName?: string;
  password?: string;
  role?: Roles;
  isAdmin?: boolean;
  isClient?: boolean;
  isEmpleado?: boolean;
}
