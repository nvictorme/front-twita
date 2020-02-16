import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PlaceholderService} from '../services/placeholder.service';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit, OnDestroy {

  postSub: Subscription;
  userSub: Subscription;
  posts: any[] = [];
  users: Map<number, any>;
  loading = true;

  constructor(private phs: PlaceholderService) {
  }

  ngOnInit(): void {
    this.postSub = this.phs.getPostsListener().subscribe((posts: any[]) => {
      this.posts = posts;
      this.loading = false;
    });
    this.phs.getPosts();

    this.userSub = this.phs.getUsersListener().subscribe((userList: Map<number, any>) => {
      this.users = userList;
    });
  }

  loadMore() {
    this.loading = true;
    this.phs.getPosts();
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
    this.userSub.unsubscribe();
  }

}
