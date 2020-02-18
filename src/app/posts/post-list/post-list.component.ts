import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PlaceholderService} from '../../services/placeholder.service';
import {DbService} from '../../services/db.service';
import {Post} from '../../models/interfaces';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postSub: Subscription;
  posts: Post[] = [];
  loading = true;

  constructor(private phs: PlaceholderService,
              private dbs: DbService) {
  }

  ngOnInit(): void {
    this.postSub = this.dbs.collection$('posts', ref => ref.orderBy('createdAt', 'desc'))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.loading = false;
      });
  }

  loadMore() {
    this.loading = true;
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
