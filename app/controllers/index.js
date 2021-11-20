import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default class IndexController extends Controller {
  deletePost(post) {
    let confirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );

    if (confirmed) {
      post.destroyRecord();
    }
  }
}
