import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AuthService} from './services/auth.service';
import {MessagingService} from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: Observable<User | null>;

  constructor(private auth: AuthService,
              private msgs: MessagingService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.msgs.getPermission();
    this.msgs.monitorTokenRefresh();
    this.msgs.receiveMessages();
  }
}
