import { Component, OnInit } from '@angular/core';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-fab-reply',
  templateUrl: './fab-reply.component.html',
  styleUrls: ['./fab-reply.component.scss']
})
export class FabReplyComponent implements OnInit {

  items: NbMenuItem[] = environment.twitaOptions;

  constructor(private nbMenuService: NbMenuService) {
  }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'fab-reply-menu'),
        map(({item: {title}}) => title),
      )
      .subscribe(title => {
        console.log(`${title} was clicked!`);
      });
  }

}
