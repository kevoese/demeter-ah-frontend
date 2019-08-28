import { combineReducers } from 'redux';
import auth from './Auth';
import resetPassword from './resetPassword';
import changePassword from './changePassword';
import articles from './articles';
import editProfile from './editProfile';
import viewProfile from './viewProfile';
import membership from './Membership';
import viewArticle from './viewArticle';
import relatedArticles from './relatedArticles';
import bookmarks from './bookmarks';
import bookmarkArticle from './bookmarkArticle';
import comments from './Comments';
import search from './search';
import notifications from './notifications';

const reducers = combineReducers({
  auth,
  resetPassword,
  changePassword,
  articles,
  editProfile,
  viewProfile,
  membership,
  viewArticle,
  relatedArticles,
  bookmarks,
  bookmarkArticle,
  comments,
  search,
  notifications
});

export default reducers;
