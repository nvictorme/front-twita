import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import FieldValue = firebase.firestore.FieldValue;
import {Favorite, Post, UserData} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private usersMap = new Map<string, UserData>();

  constructor(private db: AngularFirestore) {
  }

  collection$(path, query?) {
    return this.db
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
  }

  doc$(path): Observable<any> {
    return this.db
      .doc(path)
      .snapshotChanges()
      .pipe(
        map(doc => {
          const data: any = doc.payload.data();
          return {id: doc.payload.id, ...data};
        })
      );
  }

  updateAt(path: string, data: any): Promise<any> {
    const segments = path.split('/').filter(v => v);
    if (segments.length % 2) {
      // Odd is always a collection
      return this.db.collection(path).add(data);
    } else {
      // Even is always a document
      return this.db.doc(path).set(data, {merge: true}); // merge means not destructive
    }
  }

  updateCounter(path: string, key: string, qty: number): Promise<any> {
    return this.updateAt(path, {[key]: FieldValue.increment(qty)});
  }

  deleteAt(path) {
    return this.db.doc(path).delete();
  }

  getUserData(uid: string): Promise<UserData> {
    return new Promise((fulfill, reject) => {
      if (this.usersMap.has(uid)) {
        fulfill(this.usersMap.get(uid));
      } else {
        this.doc$(`users/${uid}`).subscribe(userData => {
          this.usersMap.set(uid, userData);
          fulfill(userData);
        });
      }
    });
  }

  addFavorite(uid: string, post: Post) {
    const {authorId, title, description, id} = post;
    const favorite: Favorite = {
      authorId,
      title,
      description,
      pid: id,
      uid
    };
    this.updateAt(`users/${uid}/favorites/${id}`, favorite);
  }

  removeFavorite(uid: string, pid: string) {
    this.deleteAt(`users/${uid}/favorites/${pid}`);
  }
}
