import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private postsListener = new Subject<any[]>();
  private usersListener = new Subject<Map<number, any>>();
  private favListener = new Subject<any[]>();
  private usersList: Map<number, any> = new Map<number, any>();
  private favorites: any[] = [];

  constructor(private http: HttpClient) {
  }

  getPostsListener() {
    return this.postsListener.asObservable();
  }

  getUsersListener() {
    return this.usersListener.asObservable();
  }

  getFavListener() {
    return this.favListener.asObservable();
  }

  getPosts() {
    return this.http.get(environment.placeholderURL + '/posts')
      .subscribe((posts: any[]) => {
        this.postsListener.next(posts);
        this.updateUsers(posts);
      });
  }

  updateUsers(posts: any[]) {
    posts.forEach(async (p: any) => {
      if (!this.usersList.has(p.userId)) {
        const user = await this.getUser(p.userId);
        this.usersList.set(p.userId, user);
      }
    });
    this.usersListener.next(this.usersList);
  }

  async getUser(userId: number) {
    return this.http.get(environment.placeholderURL + '/users/' + userId).toPromise();
  }

  getCurrentPost(): any {
    return JSON.parse(localStorage.getItem('currentPost'));
  }

  setCurrentPost(post: any): void {
    localStorage.setItem('currentPost', JSON.stringify(post));
  }

  addFav(post: any) {
    if (!this.favorites.includes(post)) {
      this.favorites.push(post);
      this.favListener.next(this.favorites);
    }
  }

  removeFav(post: any) {
    if (this.favorites.includes(post)) {
      this.favorites.splice(this.favorites.lastIndexOf(post), 1);
      this.favListener.next(this.favorites);
    }
  }
}
