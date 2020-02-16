import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {PlaceholderService} from '../../services/placeholder.service';

@Component({
  selector: 'app-favbar',
  templateUrl: './favbar.component.html',
  styleUrls: ['./favbar.component.scss']
})
export class FavbarComponent implements OnInit {

  favSub: Subscription;
  favs: any[] = [];

  constructor(private phs: PlaceholderService) { }

  ngOnInit(): void {
    this.favSub = this.phs.getFavListener().subscribe((favs: any[]) => this.favs = favs);
  }

}
