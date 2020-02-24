import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../models/interfaces';
import {DbService} from '../../services/db.service';
import {ActivatedRoute} from '@angular/router';
import {formatFireDate} from '../../helpers';
import {Subscription} from 'rxjs';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePostComponent implements OnInit, OnDestroy {

  post: Post;
  commentsSub: Subscription;
  comments: Post[] = [];

  // @ViewChild('replyBox', {static: false}) replyBox;

  constructor(private dbs: DbService,
              private favs: FavoriteService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dbs.getSinglePost(params.postId).then((post: Post) => {
        if (post.description) {
          this.post = post;
          this.commentsSub = this.dbs.collection$(`posts/${this.post.id}/comments`, ref => ref.orderBy('meta.ups', 'desc').limit(500))
            .subscribe(comments => this.comments = comments);
        } else {
          this.post = null;
          this.favs.removeFav(post);
        }
      })
        .catch(error => console.error(error.message));
    });
  }

  ngOnDestroy(): void {
    this.commentsSub?.unsubscribe();
  }

}
