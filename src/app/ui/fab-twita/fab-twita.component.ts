import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbMenuItem} from '@nebular/theme';
import {filter} from 'rxjs/operators';
import {CreatePostComponent} from '../../posts/create-post/create-post.component';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-fab-twita',
  templateUrl: './fab-twita.component.html',
  styleUrls: ['./fab-twita.component.scss']
})
export class FabTwitaComponent implements OnInit {

  urlSub: Subscription;
  isComment = false;
  postId: string;

  constructor(private dialogService: NbDialogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.propsFromPath(this.router.url);
    this.urlSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        this.propsFromPath(event.url);
      });
  }

  propsFromPath(path: string) {
    if (path.includes('post/')) {
      this.isComment = true;
      this.postId = path.split('/').pop();
    } else {
      this.isComment = false;
      this.postId = undefined;
    }
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
