import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';
import {Post, UserData} from '../../models/interfaces';
import {DbService} from '../../services/db.service';
import {formatFireDate} from '../../helpers';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, AfterViewChecked {

  @Input() post: Post;
  author: Promise<UserData>;
  isFavorite = false;
  isShared = false;
  commentCount: number;

  constructor(private dbs: DbService,
              private favs: FavoriteService,
              private router: Router) {
  }

  ngOnInit() {
    this.author = this.dbs.getUserData(this.post.authorId);
    this.commentCount = this.post.meta.comments;
  }

  ngAfterViewChecked(): void {
    this.isFavorite = this.favs.isFav(this.post.id);
  }

  toggleFavorite(evt: any) {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.favs.addFav(this.post) : this.favs.removeFav(this.post);
  }

  toggleShared(evt: any) {
    this.isShared = !this.isShared;
  }

  async commentPost() {
    await this.router.navigateByUrl(`/post/${this.post.id}`);
  }

  formatDate() {
    return formatFireDate(this.post.createdAt);
  }

}
