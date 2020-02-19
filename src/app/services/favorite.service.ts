import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DbService} from './db.service';
import {AuthService} from './auth.service';
import {Favorite, Post, Vote} from '../models/interfaces';

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

  setVote(post: Post, vote: Vote, isComment: boolean = false, parentId?: string) {
    this.auth.getUser().subscribe(async userRecord => {
      const uid = userRecord.uid;
      let votePath = `posts/${post.id}/votes/${uid}`;
      if (isComment) {
        votePath = `posts/${parentId}/comments/${post.id}/votes/${uid}`;
      }
      const voteData = {...vote, uid};
      localStorage.setItem(votePath, JSON.stringify(voteData));
      this.dbs.updateAt(votePath, voteData);
    });
  }

  getVote(post: Post, isComment: boolean = false, parentId?: string): Promise<Vote> {
    return new Promise((fulfill, reject) => {
      this.auth.getUser().subscribe(async userRecord => {
        const uid = userRecord.uid;
        let votePath = `posts/${post.id}/votes/${uid}`;
        if (isComment) {
          votePath = `posts/${parentId}/comments/${post.id}/votes/${uid}`;
        }
        if (localStorage.getItem(votePath)) {
          fulfill(JSON.parse(localStorage.getItem(votePath)));
        } else {
          this.dbs.doc$(votePath).subscribe(voteDoc => {
            if (voteDoc.exists) {
              const voteData: Vote = voteDoc.data();
              localStorage.setItem(votePath, JSON.stringify(voteData));
              fulfill(voteDoc);
            } else {
              fulfill({
                up: false,
                down: false,
                uid
              });
            }
          });
        }
      });
    });
  }
}
