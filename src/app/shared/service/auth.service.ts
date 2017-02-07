import { User } from './../entidade/user';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  AngularFire,
  AuthProviders,
  AuthMethods,
  FirebaseAuthState,
  AngularFireAuth
} from 'angularfire2';

declare var firebase: any;

@Injectable()
export class AuthService {
  auth: FirebaseAuthState;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(
      authState => {
        if (authState) {
          this.auth = authState;
        } else {
          this.auth = null;
        }
      }
    );
  }

  isAuthenticated(): boolean {
    console.log(this.auth);
    return this.auth === undefined ? false : true;
  }

  public getAuth(): AngularFireAuth {
    return this.af.auth;
  }

  public login(user: User): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      email: user.email,
      password: user.password
    }, {
        method: AuthMethods.Password,
        provider: AuthProviders.Password
      });

  }

  logout(): Promise<void> {
    return this.af.auth.logout();
  }


}