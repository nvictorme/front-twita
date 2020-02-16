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
import {UserData, UserRoles} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth,
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
            this.updateUser();
          });
        break;
      }
      case AuthProviders.GITHUB: {
        this.afAuth.auth.signInWithPopup(new GithubAuthProvider())
          .then(authResult => {
            this.updateUser();
          });
        break;
      }
      case AuthProviders.TWITTER: {
        this.afAuth.auth.signInWithPopup(new TwitterAuthProvider())
          .then(authResult => {
            this.updateUser();
          });
        break;
      }
      case AuthProviders.FACEBOOK: {
        this.afAuth.auth.signInWithPopup(new FacebookAuthProvider())
          .then(authResult => {
            this.updateUser();
          });
        break;
      }
      default: {
        this.afAuth.auth.signInWithPopup(new GoogleAuthProvider())
          .then(authResult => {
            this.updateUser();
          });
      }
    }
  }

  updateUser() {
    this.user.subscribe(cUser => {
      const {uid, displayName, photoURL, email, phoneNumber} = cUser;
      const roles: UserRoles = this.initRoles();
      const userData: UserData = {
        bio: '',
        catchPhrase: '',
        country: '',
        displayName,
        email,
        firstName: '',
        lastName: '',
        phoneNumber,
        photoURL,
        roles,
        uid
      };
      console.log(userData);
      this.router.navigate(['demo-list']);
    });
  }

  initRoles(): UserRoles {
    return {
      admin: false,
      basic: true,
      editor: false
    };
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.user.subscribe(cUser => {
        this.router.navigate(['']);
      });
    });
  }
}
