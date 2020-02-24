import {Component, Input, OnInit} from '@angular/core';
import {ActionState, Post, Vote} from '../../models/interfaces';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-actions',
  templateUrl: './post-actions.component.html',
  styleUrls: ['./post-actions.component.scss']
})
export class PostActionsComponent implements OnInit {

  @Input() post: Post;
  @Input() isComment = false;
  @Input() parentId: string;
  actionState: ActionState = {
    favorite: false,
    shared: false,
    up: false,
    down: false
  };

  constructor(private favs: FavoriteService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.actionState.favorite = this.favs.isFav(this.post.id);
    this.favs.getVote(this.post, this.isComment, this.parentId).then(myVote => {
      this.actionState.up = myVote.up;
      this.actionState.down = myVote.down;
    });
  }

  toggleFavorite(evt: any) {
    this.actionState.favorite = !this.actionState.favorite;
    this.actionState.favorite ? this.favs.addFav(this.post) : this.favs.removeFav(this.post);
  }

  toggleDown(evt: any) {
    this.actionState.down = !this.actionState.down;
    if (this.actionState.down) {
      this.actionState.up = !this.actionState.down;
    }
    this.vote();
  }

  toggleUp(evt: any) {
    this.actionState.up = !this.actionState.up;
    if (this.actionState.up) {
      this.actionState.down = !this.actionState.up;
    }
    this.vote();
  }

  vote() {
    const {up, down} = this.actionState;
    this.favs.setVote(this.post, {up, down}, this.isComment, this.parentId);
  }

  async commentPost() {
    await this.router.navigateByUrl(`/post/${this.post.id}`);
  }

}
