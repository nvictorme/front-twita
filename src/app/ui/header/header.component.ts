import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NbSidebarService} from '@nebular/theme';
import {User} from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: User;
  barStatus: any = {
    favbar: false,
    menubar: false
  };

  constructor(private sbs: NbSidebarService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.getUser().subscribe(userData => this.user = userData);
  }

  toggleBar(evt: any, barTag: string) {
    this.sbs.toggle(evt.checked, barTag);
  }

  ngOnDestroy(): void {
    this.barStatus.favbar = false;
    this.barStatus.menubar = false;
  }
}
