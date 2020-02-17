import {Component, Input, OnInit} from '@angular/core';
import {PlaceholderService} from '../../services/placeholder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: any;
  @Input() user: any;
  isFavorite = false;
  isShared = false;
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

  toggleShared(evt: any) {
    this.isShared = !this.isShared;
  }

  commentCount() {
    return Math.ceil(Math.random() * 100);
  }

  async commentPost() {
    this.phs.setCurrentPost({data: this.post, user: this.user});
    await this.router.navigateByUrl('/demo-code');
  }

}
