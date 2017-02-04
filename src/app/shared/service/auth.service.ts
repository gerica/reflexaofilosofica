import { User } from './../entidade/user';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor() { }

  signupUser(user: User): void {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User): any {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>()

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
      
    });

    return subject.asObservable();
  }

  logout(): void {
    firebase.auth().signOut();
  }


}