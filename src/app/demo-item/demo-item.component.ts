import {Component, Input, OnInit} from '@angular/core';
import {PlaceholderService} from '../services/placeholder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-demo-item',
  templateUrl: './demo-item.component.html',
  styleUrls: ['./demo-item.component.scss']
})
export class DemoItemComponent implements OnInit {

  @Input() post: any;
  @Input() user: any;
  isFavorite = false;
  isRetwita = false;
  cCount: number;

  constructor(private phs: PlaceholderService,
              private router: Router) {
    this.cCount = this.commentCount();
  }

  ngOnInit(): void {
  }

  toggleFavorite(evt: any) {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.phs.addFav(this.post) : this.phs.removeFav(this.post);
  }

  toggleRetwita(evt: any) {
    this.isRetwita = !this.isRetwita;
  }

  commentCount() {
    return Math.ceil(Math.random() * 100);
  }

  async commentPost() {
    this.phs.setCurrentPost({data: this.post, user: this.user});
    await this.router.navigateByUrl('/demo-code');
  }

}
