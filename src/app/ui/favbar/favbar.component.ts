import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Favorite} from '../../models/interfaces';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-favbar',
  templateUrl: './favbar.component.html',
  styleUrls: ['./favbar.component.scss']
})
export class FavbarComponent implements OnInit {

  favSub: Subscription;
  myFavorites: Favorite[] = [];

  constructor(private favs: FavoriteService) {
  }

  ngOnInit(): void {
    this.favSub = this.favs.getFavListener().subscribe((favorites: Favorite[]) => this.myFavorites = favorites);
    this.favs.getFavorites();
  }

}
