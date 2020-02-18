import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DbService} from './db.service';
import {AuthService} from './auth.service';
import {Post} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favListener = new Subject<any[]>();
  private favorites: any[] = [];

  constructor(private dbs: DbService,
              private auth: AuthService) {
    this.auth.getUser().subscribe(user => {
      this.dbs.collection$(`users/${user.uid}/favorites`)
        .subscribe(favorites => {
          this.favorites = favorites;
          this.favListener.next(this.favorites);
        });
    });
  }

  getFavListener() {
    return this.favListener.asObservable();
  }

  getCurrentPost(): any {
    return JSON.parse(localStorage.getItem('currentPost'));
  }

  setCurrentPost(post: any): void {
    localStorage.setItem('currentPost', JSON.stringify(post));
  }

  isFav(pid: string) {
    return this.favorites.some(f => f.pid === pid);
  }

  addFav(post: Post) {
    this.auth.getUser().subscribe(userRecord => {
      this.dbs.addFavorite(userRecord.uid, post);
    });
  }

  removeFav(post: Post) {
    this.auth.getUser().subscribe(userRecord => {
      this.dbs.removeFavorite(userRecord.uid, post.id);
    });
  }
}
