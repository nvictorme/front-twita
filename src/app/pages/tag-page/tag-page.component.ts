import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Post} from '../../models/interfaces';
import {DbService} from '../../services/db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit, OnDestroy {

  postSub: Subscription;
  posts: Post[] = [];
  loading = true;
  tag: string;

  constructor(private dbs: DbService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tag = params.tag;
      if (this.tag) {
        this.postSub = this.dbs.collection$('posts', ref =>
          ref.where('tags', 'array-contains', this.tag)
            .orderBy('createdAt', 'desc')
            .limit(100))
          .subscribe((posts: Post[]) => {
            this.setPosts(posts);
          });
      }
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
