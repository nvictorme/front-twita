import {Component, Input, OnInit} from '@angular/core';
import {Favorite} from '../../../models/interfaces';

@Component({
  selector: 'app-fav-list-item',
  templateUrl: './fav-list-item.component.html',
  styleUrls: ['./fav-list-item.component.scss']
})
export class FavListItemComponent implements OnInit {

  @Input() fav: Favorite;

  constructor() {
  }

  ngOnInit(): void {
  }

}
