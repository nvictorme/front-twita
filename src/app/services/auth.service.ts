import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthProviders} from '../models/enumerations';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly user: Observable<firebase.User | null> = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router,
              private toasty: NbToastrService) {
    this.user = this.afAuth.user;
  }

  getUser() {
    return this.user;
  }

  getAuthProvider(authProvider: AuthProviders) {
    switch (authProvider) {
      case AuthProviders.GOOGLE:
        return new GoogleAuthProvider();
      case AuthProviders.GITHUB:
        return new GithubAuthProvider();
      case AuthProviders.TWITTER:
        return new TwitterAuthProvider();
      case AuthProviders.FACEBOOK:
        return new FacebookAuthProvider();
      default:
        return new GoogleAuthProvider();
    }
  }

  login(authProvider: AuthProviders) {
    this.afAuth.auth.signInWithPopup(this.getAuthProvider(authProvider))
      .then(authResult => {
        this.router.navigateByUrl('/recent').then(() => {
          this.toasty.show(`Welcome back!`, undefined, {
            duration: 2000,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            status: 'success'
          });
        });
      }).catch(error => {
      this.toasty.show(error.message, 'Something went wrong!', {
        duration: 5000,
        position: NbGlobalPhysicalPosition.TOP_RIGHT,
        status: 'danger'
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.user.subscribe(cUser => {
        this.router.navigateByUrl('/').then(() => {
          location.reload();
        });
      });
    });
  }
}
