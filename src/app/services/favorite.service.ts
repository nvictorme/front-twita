import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DbService} from './db.service';
import {AuthService} from './auth.service';
import {Favorite, Post} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favListener = new Subject<Favorite[]>();
  private favorites: any[] = [];

  constructor(private dbs: DbService,
              private auth: AuthService) {
  }

  getFavListener() {
    return this.favListener.asObservable();
  }

  getFavorites() {
    this.auth.getUser().subscribe(user => {
      this.dbs.collection$(`users/${user.uid}/favorites`)
        .subscribe(favorites => {
          this.favorites = favorites;
          this.favListener.next(this.favorites);
        });
    });
  }

  getCurrentPost(): Post {
    return JSON.parse(localStorage.getItem('currentPost'));
  }

  setCurrentPost(post: Post): void {
    localStorage.setItem('currentPost', JSON.stringify(post));
  }

  isFav(pid: string) {
    return this.favorites.some(f => f.pid === pid);
  }

  addFav(post: Post) {
    this.auth.getUser().subscribe(async userRecord => {
      this.dbs.addFavorite(userRecord.uid, post);
    });
  }

  removeFav(post: Post) {
    this.auth.getUser().subscribe(async userRecord => {
      this.dbs.removeFavorite(userRecord.uid, post.id);
    });
  }
}
