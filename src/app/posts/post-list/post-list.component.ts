import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/interfaces';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadMore() {
    this.loading = true;
  }
}
