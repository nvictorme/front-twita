import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Post, UserData} from '../../models/interfaces';
import {DbService} from '../../services/db.service';
import {formatFireDate} from '../../helpers';
import {EmbedVideoService} from '../../services/embed-video.service';
import {PostTypes} from '../../models/enumerations';
import {StorageService} from '../../services/storage.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnChanges {

  @Input() post: Post;
  @Input() isComment = false;
  @Input() parentId: string;
  author: UserData;
  PostTypes = PostTypes;
  postImage: Observable<string>;
  postVideo: HTMLIFrameElement;

  constructor(private dbs: DbService,
              private stgs: StorageService,
              private favs: FavoriteService,
              private evs: EmbedVideoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.onLoad();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onLoad();
  }

  async onLoad() {
    this.author = await this.dbs.getUserData(this.post.authorId);
    if (this.post.type === PostTypes.Image) {
      this.postImage = this.stgs.getImageUrl(this.post.media.fileName, 500);
    }
    if (this.post.type === PostTypes.Video) {
      this.postVideo = this.embedVideo();
    }
  }

  formatDate() {
    return formatFireDate(this.post.createdAt);
  }

  embedVideo() {
    return this.evs.embed(this.post.media.url, {
      attr: {
        width: '100%',
        height: '400',
      }
    });
  }

  goToTag(tag: string) {
    this.router.navigate(['tag', tag]);
  }

}
