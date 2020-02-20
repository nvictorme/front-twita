import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit, OnChanges {

  userId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchParams();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchParams();
  }

  fetchParams() {
    this.route.params.subscribe(params => {
      this.userId = params.userId;
    });
  }

}
