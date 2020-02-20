import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit, OnDestroy {

  user: Observable<User | null> = null;
  barStatus: any = {
    favbar: true,
    menubar: true
  };
  items: NbMenuItem[] = environment.menuBarItems;

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
