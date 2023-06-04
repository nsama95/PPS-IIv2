import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserApp } from '../interface/userApp';

import { FirebaseCodeErrorService } from './firebase-code-error.services';
import { RoleValidator } from '../helpers/roleValidator';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RoleValidator{
  public user$: Observable<UserApp>;
 // public userPrueba$: Observable<UserApp>;
  constructor(public afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    private firebaseError: FirebaseCodeErrorService,private router: Router) {
      super();
     /* this.user$ = this.afAuth.authState.pipe(
        switchMap((user) => {
          if (user) {
            return this.afs.doc<UserApp>(`users/${user.uid}`).valueChanges();
          }
          return of(null);
        })
      );*/

      this.user$ =this.afAuth.user;

/*  this.afAuth.authState.pipe(
        switchMap( async (user) => {
          if (user) {
            const info= await this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            
            console.log('user services'+JSON.stringify(info));
          }
          return of(null);
        })
      ); */

   }

   async register(dataUser: UserApp): Promise<UserApp> {
    console.log('user service registro'+dataUser);
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        dataUser.email,
        dataUser.password
      );
      await this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('ERROR'+error);
      window.alert(this.firebaseError.codeError(error.code));
    }
  }

  async logout(): Promise<void> {
    this.router.navigate(['/main']);
      await this.afAuth.signOut();
      
  }

   async login(dataUser: UserApp): Promise<UserApp> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        dataUser.email,
        dataUser.password
      );
      const userFinal=null;
      if(user){
         const userFinal=await this.afs.doc<UserApp>(`users/${user.uid}`).valueChanges();
      }
      return userFinal;
    } catch (error) {
      console.log(error);
    }
  }
  private updateUserData(user: UserApp) {
    const userRef: AngularFirestoreDocument<UserApp> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: UserApp = {
      uid: user.uid,
      email: user.email,
      displayName: user.email,
     // photoURL: user.photoURL,
      role: 'ADMIN',
      isAdmin: true,
     
    };

    return userRef.set(data, { merge: true });
  }
  isUserAdmin(userId) {
    return this.afs.doc<UserApp>(`users/${userId}`).valueChanges();
  }
  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

}
