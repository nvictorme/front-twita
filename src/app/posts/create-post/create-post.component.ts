import {Component, Input, OnInit} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  tabItems: NbMenuItem[] = environment.postTabItems;
  @Input() isComment = false;
  @Input() postId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
