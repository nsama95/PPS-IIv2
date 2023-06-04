import { UserApp } from "../interface/userApp";

export class RoleValidator {
   /* isSuscriptor(user: User): boolean {
      return user.role === 'SUSCRIPTOR';
    }
  
    isEditor(user: User): boolean {
      return user.role === 'EDITOR';
    }*/
  
    isAdmin(user: UserApp): boolean {
      return user.role === 'ADMIN';
    }
  }
  