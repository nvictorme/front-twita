import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbMenuItem, NbMenuService} from '@nebular/theme';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {CreatePostComponent} from '../../posts/create-post/create-post.component';

@Component({
  selector: 'app-fab-twita',
  templateUrl: './fab-twita.component.html',
  styleUrls: ['./fab-twita.component.scss']
})
export class FabTwitaComponent implements OnInit {

  items: NbMenuItem[] = environment.twitaOptions;

  constructor(private menuService: NbMenuService,
              private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    // this.registerMenuService();
  }

  openTwitaDialog() {
    this.dialogService.open(CreatePostComponent, {
      autoFocus: true,
      closeOnBackdropClick: true,
      closeOnEsc: true,
      hasBackdrop: true,
      hasScroll: false,
      context: {}
    });
  }

  registerMenuService() {
    this.menuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'fab-twita-menu'),
        map(({item: {title}}) => title),
      )
      .subscribe(title => {
        console.log(`${title} was clicked!`);
      });
  }

}
