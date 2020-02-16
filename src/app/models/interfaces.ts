import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface UserRoles {
  admin: boolean;
  basic: boolean;
  editor: boolean;
}

export interface User {
  bio?: string;
  catchPhrase: string;
  country?: string;
  displayName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  roles?: UserRoles;
  uid?: string;
}

export interface MediaMeta {
  fileName?: string;
  url?: string;
}

export interface PostMedia {
  audio?: MediaMeta;
  image?: MediaMeta;
  link?: MediaMeta;
  video?: MediaMeta;
}

export interface PostMeta {
  comments?: number;
  reposts?: number;
  stars?: number;
}

export interface Post {
  authorId: string;
  content: string;
  createdAt: Timestamp;
  media: PostMedia;
  meta?: PostMeta;
  title: string;
  tags?: string[];
}

