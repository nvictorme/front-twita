import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';
import {Post, UserData} from '../../models/interfaces';
import {DbService} from '../../services/db.service';
import {formatFireDate} from '../../helpers';
import {EmbedVideoService} from '../../services/embed-video.service';
import {PostTypes} from '../../models/enumerations';
import {StorageService} from '../../services/storage.service';
import {Observable} from 'rxjs';

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
  PostTypes = PostTypes;
  postImage: Observable<any>;

  constructor(private dbs: DbService,
              private stgs: StorageService,
              private favs: FavoriteService,
              private evs: EmbedVideoService,
              private router: Router) {
  }

  ngOnInit() {
    this.author = this.dbs.getUserData(this.post.authorId);
    this.commentCount = this.post.meta.comments;
    if (this.post.type === PostTypes.Image) {
      this.postImage = this.stgs.getImageUrl(this.post.media.fileName, 500);
    }
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

  embedVideo() {
    return this.evs.embed(this.post.media.url, {
      attr: {
        width: 486,
        height: 349,
      }
    });
  }

}
