import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../models/interfaces';
import {AuthService} from '../../services/auth.service';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userId: string;
  userData: UserData;

  constructor(private auth: AuthService,
              private dbs: DbService) {
  }

  async ngOnInit() {
    this.userData = await this.dbs.getUserData(this.userId);
  }

}
