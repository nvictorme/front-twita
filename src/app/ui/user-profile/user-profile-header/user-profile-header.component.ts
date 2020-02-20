import {Component, Input} from '@angular/core';
import {UserData} from '../../../models/interfaces';

@Component({
  selector: 'app-user-profile-header',
  templateUrl: './user-profile-header.component.html',
  styleUrls: ['./user-profile-header.component.scss']
})
export class UserProfileHeaderComponent {

  @Input() userData: UserData;

}
