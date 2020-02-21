import {Component, Input, OnInit} from '@angular/core';
import {DbService} from '../../services/db.service';
import {Post} from '../../models/interfaces';

@Component({
  selector: 'app-user-recent-posts',
  templateUrl: './user-recent-posts.component.html',
  styleUrls: ['./user-recent-posts.component.scss']
})
export class UserRecentPostsComponent implements OnInit {

  @Input() userId: string;
  posts: Post[] = [];

  constructor(private dbs: DbService) {
  }

  ngOnInit(): void {
    this.dbs.collection$('posts', ref => ref.where('authorId', '==', this.userId)
      .orderBy('createdAt', 'desc'))
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

}
