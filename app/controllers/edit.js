import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditController extends Controller {
  @service router;

  @action
  async editPost(evt) {
    evt.preventDefault();
    let post = this.model;
    await post.save();
    // this.router.transitionTo('index');
    this.router.transitionTo('post', post.id);
  }
}
