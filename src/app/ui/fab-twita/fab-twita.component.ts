import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbMenuItem} from '@nebular/theme';
import {environment} from '../../../environments/environment';
import {filter} from 'rxjs/operators';
import {CreatePostComponent} from '../../posts/create-post/create-post.component';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-fab-twita',
  templateUrl: './fab-twita.component.html',
  styleUrls: ['./fab-twita.component.scss']
})
export class FabTwitaComponent implements OnInit {

  items: NbMenuItem[] = environment.postTabItems;
  urlSub: Subscription;
  isComment = false;
  postId: string;

  constructor(private dialogService: NbDialogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.urlSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        if (event.url.includes('post/')) {
          this.isComment = true;
          this.postId = event.url.split('/').pop();
        } else {
          this.isComment = false;
          this.postId = undefined;
        }
      });
  }

  openTwitaDialog() {
    this.dialogService.open(CreatePostComponent, {
      autoFocus: true,
      closeOnBackdropClick: true,
      closeOnEsc: true,
      hasBackdrop: true,
      hasScroll: false,
      context: {
        isComment: this.isComment,
        postId: this.postId
      }
    });
  }

}
