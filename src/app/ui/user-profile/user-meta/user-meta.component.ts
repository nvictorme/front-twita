import {Component, Input, OnInit} from '@angular/core';
import {UserMeta} from '../../../models/interfaces';

@Component({
  selector: 'app-user-meta',
  templateUrl: './user-meta.component.html',
  styleUrls: ['./user-meta.component.scss']
})
export class UserMetaComponent implements OnInit {

  @Input() userMeta: UserMeta;

  constructor() { }

  ngOnInit(): void {
  }

}
