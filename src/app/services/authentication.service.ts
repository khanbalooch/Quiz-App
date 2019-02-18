import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.user = user;
        localStorage.setItem(environment.user, JSON.stringify(this.user));
      } else {
        localStorage.setItem(environment.user, null);
      }
    });
  }

  async login (credentials: any) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(credentials.username, credentials.password);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async logout () {
    try {
      await this.afAuth.auth.signOut();
      localStorage.removeItem(environment.user);
    } catch (error) {
      console.log(error);
    }
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem(environment.user));
    return  user  !==  null;
  }
}
