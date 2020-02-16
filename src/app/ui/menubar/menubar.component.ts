import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  user: Observable<User | null>;
  items: NbMenuItem[] = [
    {
      title: 'feed',
      link: '/demo-list',
      icon: 'list-outline'
    },
    {
      title: 'code',
      link: '/demo-code',
      icon: 'code-outline'
    }
  ];

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  logOut() {
    this.auth.logout();
  }

}
