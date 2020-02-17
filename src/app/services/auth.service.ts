import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthProviders} from '../models/enumerations';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly user: Observable<firebase.User | null> = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) {
    this.user = this.afAuth.user;
  }

  getUser() {
    return this.user;
  }

  login(authProvider: AuthProviders) {
    switch (authProvider) {
      case AuthProviders.GOOGLE: {
        this.afAuth.auth.signInWithPopup(new GoogleAuthProvider())
          .then(authResult => {
            this.router.navigate(['recent']);
          });
        break;
      }
      case AuthProviders.GITHUB: {
        this.afAuth.auth.signInWithPopup(new GithubAuthProvider())
          .then(authResult => {
            this.router.navigate(['recent']);
          });
        break;
      }
      case AuthProviders.TWITTER: {
        this.afAuth.auth.signInWithPopup(new TwitterAuthProvider())
          .then(authResult => {
            this.router.navigate(['recent']);
          });
        break;
      }
      case AuthProviders.FACEBOOK: {
        this.afAuth.auth.signInWithPopup(new FacebookAuthProvider())
          .then(authResult => {
            this.router.navigate(['recent']);
          });
        break;
      }
      default: {
        this.afAuth.auth.signInWithPopup(new GoogleAuthProvider())
          .then(authResult => {
            this.router.navigate(['recent']);
          });
      }
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.user.subscribe(cUser => {
        this.router.navigate(['']);
      });
    });
  }
}
