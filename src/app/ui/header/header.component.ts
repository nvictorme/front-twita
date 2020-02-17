import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AuthService} from '../../services/auth.service';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: Observable<User | null> = null;
  barStatus: any = {
    favbar: false,
    menubar: false
  };

  constructor(private sbs: NbSidebarService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  toggleBar(evt: any, barTag: string) {
    this.sbs.toggle(evt.checked, barTag);
  }

  ngOnDestroy(): void {
    this.barStatus.favbar = false;
    this.barStatus.menubar = false;
  }
}
