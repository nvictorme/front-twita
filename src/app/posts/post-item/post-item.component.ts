import {Component, Input, OnInit} from '@angular/core';
import {PlaceholderService} from '../../services/placeholder.service';
import {Router} from '@angular/router';
import {Post, UserData} from '../../models/interfaces';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  author: Promise<UserData>;
  isFavorite = false;
  isShared = false;
  commentCount: number;

  constructor(private dbs: DbService,
              private phs: PlaceholderService,
              private router: Router) {
  }

  ngOnInit() {
    this.author = this.dbs.getUserData(this.post.authorId);
    this.commentCount = this.post.meta.comments;
  }

  toggleFavorite(evt: any) {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.phs.addFav(this.post) : this.phs.removeFav(this.post);
  }

  toggleShared(evt: any) {
    this.isShared = !this.isShared;
  }

  async commentPost() {
    this.phs.setCurrentPost({data: this.post});
    await this.router.navigateByUrl(`/post/${this.post.id}`);
  }

}
