import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../models/interfaces';
import * as moment from 'moment';
import {DbService} from '../../services/db.service';
import {ActivatedRoute} from '@angular/router';
import {formatFireDate} from '../../helpers';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePostComponent implements OnInit, OnDestroy {

  post: Post;
  commentsSub: Subscription;
  comments: Post[] = [];
  @ViewChild('replyBox', {static: false}) replyBox;

  constructor(private dbs: DbService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dbs.getSinglePost(params.postId).then(post => {
        this.post = post;
        this.commentsSub = this.dbs.collection$(`posts/${this.post.id}/comments`)
          .subscribe(comments => this.comments = comments);
      });
    });
  }

  toggleReplyBox() {
    this.replyBox.toggle();
  }

  formatDate() {
    return formatFireDate(this.post.createdAt);
  }

  ngOnDestroy(): void {
    this.commentsSub.unsubscribe();
  }

}
