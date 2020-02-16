import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlaceholderService} from './services/placeholder.service';
import {Subscription} from 'rxjs';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'front-twita';
  favSub: Subscription;
  favs: any[] = [];

  constructor(private phs: PlaceholderService,
              private sbs: NbSidebarService) {
  }

  ngOnInit(): void {
    this.favSub = this.phs.getFavListener().subscribe((favs: any[]) => this.favs = favs);
  }

  toggleBar(barTag: string) {
    this.sbs.toggle(false, barTag);
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }

}
