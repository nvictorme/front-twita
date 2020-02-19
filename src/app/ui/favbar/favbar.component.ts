import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Favorite} from '../../models/interfaces';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favbar',
  templateUrl: './favbar.component.html',
  styleUrls: ['./favbar.component.scss']
})
export class FavbarComponent implements OnInit {

  favSub: Subscription;
  myFavorites: Favorite[] = [];
  filtered: Favorite[];

  constructor(private favs: FavoriteService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.favSub = this.favs.getFavListener().subscribe((favorites: Favorite[]) => {
      this.myFavorites = favorites;
      this.filtered = [...favorites];
    });
    this.favs.getFavorites();
  }

  onFavClick(pid: string) {
    this.router.navigateByUrl(`/post/${pid}`);
  }

  filterFavs(evt: any) {
    const keyword: string = evt.target.value.toLowerCase();
    this.filtered = this.myFavorites.filter(m => {
      return m.title.toLowerCase().includes(keyword) || m.description.toLowerCase().includes(keyword);
    });
  }

}
