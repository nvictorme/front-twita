import {Component, Inject, OnInit} from '@angular/core';
import {NB_WINDOW, NbMenuItem, NbMenuService} from '@nebular/theme';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-fab-twita',
  templateUrl: './fab-twita.component.html',
  styleUrls: ['./fab-twita.component.scss']
})
export class FabTwitaComponent implements OnInit {

  items: NbMenuItem[] = environment.twitaOptions;

  constructor(private nbMenuService: NbMenuService) {
  }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'fab-twita-menu'),
        map(({item: {title}}) => title),
      )
      .subscribe(title => {
        console.log(`${title} was clicked!`);
      });
  }

}
