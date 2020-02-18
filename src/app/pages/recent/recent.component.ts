import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Post} from '../../models/interfaces';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit, OnDestroy {

  postSub: Subscription;
  posts: Post[] = [];
  loading = true;

  constructor(private dbs: DbService) {
  }

  ngOnInit(): void {
    this.postSub = this.dbs.collection$('posts', ref => ref.orderBy('createdAt', 'desc').limit(100))
      .subscribe((posts: Post[]) => {
        this.setPosts(posts);
      });
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

}
