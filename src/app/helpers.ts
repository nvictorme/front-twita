import {PostMedia, PostMeta} from './models/interfaces';
import slugify from 'slugify';
import * as moment from 'moment';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export const initPostMeta = (): PostMeta => {
  return {
    comments: 0,
    shares: 0,
    stars: 0
  };
};

export const initPostMedia = (): PostMedia => {
  return {
    fileName: '',
    url: '',
    code: ''
  };
};

export const parseTags = (chips: any[]): string[] => {
  return chips.map(c => slugIt(c.value));
};

export const slugIt = (str: string): string => {
  return slugify(str, {
    replacement: '-',
    lower: true,
    remove: /\W/g
  });
};

export const formatFireDate = (fireDate: any) => {
  return moment(fireDate.toDate()).format('MM-DD-YYYY hh:mm a');
};
