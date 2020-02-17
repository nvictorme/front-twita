import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit, OnDestroy {

  user: Observable<User | null> = null;
  barStatus: any = {
    favbar: false,
    menubar: false
  };
  items: NbMenuItem[] = [
    {
      title: 'Feed',
      link: '/recent',
      icon: 'list-outline'
    },
    {
      title: 'Favorites',
      link: '/recent',
      icon: 'star-outline'
    },
    {
      title: 'Profile',
      link: '/my-profile',
      icon: 'person-outline'
    }
  ];

  constructor(private sbs: NbSidebarService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  logOut() {
    this.auth.logout();
  }

  toggleBar(evt: any, barTag: string) {
    this.sbs.toggle(evt.checked, barTag);
  }

  ngOnDestroy(): void {
    this.barStatus.favbar = false;
    this.barStatus.menubar = false;
  }

}
