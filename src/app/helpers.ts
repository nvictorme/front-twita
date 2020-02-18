import {PostMeta} from './models/interfaces';

export const initPostMeta = (): PostMeta => {
  return {
    comments: 0,
    shares: 0,
    stars: 0
  };
};
