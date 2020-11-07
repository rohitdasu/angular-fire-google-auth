import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable} from 'rxjs';
import * as firebase from 'firebase/app';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user: Observable<User>;

  constructor(public AFAuth: AngularFireAuth) { 
    this.user = AFAuth.authState;
  }

  public loginWithGoogle(){
    const provider = new firebase.default.auth.GoogleAuthProvider();
    this.AFAuth.signInWithRedirect(provider);
  }

  public logout(){
    this.AFAuth.signOut();
  }

}
