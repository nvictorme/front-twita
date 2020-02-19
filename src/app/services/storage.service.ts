import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {ImageSize} from '../models/enumerations';
import {Upload} from '../models/upload.class';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private afStorage: AngularFireStorage) {
  }

  getImageUrl(fileName: string, size: ImageSize = 250): Observable<any> {
    const splitName = fileName.split('.');
    return this.afStorage.ref(`/media/images/${splitName[0]}_${size}x${size}.${splitName[1]}`).getDownloadURL();
  }

  uploadFile(basePath: string, upload: Upload) {
    const filePath = `${basePath}/${upload.name}`;
    const fileRef = this.afStorage.storage.ref(filePath);
    const task = this.afStorage.upload(filePath, upload.file);
    return task.percentageChanges();
  }
}
