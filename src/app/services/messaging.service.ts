import {Injectable} from '@angular/core';
import {DbService} from './db.service';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {AuthService} from './auth.service';
import {NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messaging = firebase.messaging();

  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  constructor(private dbs: DbService,
              private auth: AuthService,
              private notify: NbToastrService) {
  }

  getPermission() {
    this.messaging.requestPermission().then(() => {
      this.messaging.getToken()
        .then(newToken => {
          this.saveToken(newToken);
        })
        .catch(error => {
          this.getPermission();
        });
    });
  }

  monitorTokenRefresh() {
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken()
        .then(refreshedToken => {
          this.saveToken(refreshedToken);
        });
    });
  }

  saveToken(token: string) {
    this.auth.getUser().subscribe(user => {
      this.dbs.updateAt(`users/${user.uid}`, {
        fcmTokens: firebase.firestore.FieldValue.arrayUnion(token)
      });
    });
  }

  receiveMessages() {
    this.messaging.onMessage((payload: any) => {
      // console.log(payload);
      this.messageSource.next(payload);
      this.buildNotification(payload);
    });
  }

  buildNotification(msg: any) {
    this.notify.primary(msg.notification.body, msg.notification.title, {
      position: NbGlobalPhysicalPosition.BOTTOM_LEFT,
      duration: 3000
    });
  }
}
