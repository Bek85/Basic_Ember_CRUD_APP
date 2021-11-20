import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CreateController extends Controller {
  @service router;
  @service store;

  @action
  async createPost(evt) {
    evt.preventDefault();
    let post = this.store.createRecord('post', {
      title: this.title,
      body: this.body,
    });

    await post.save();
    // this.router.transitionTo('index');
    this.router.transitionTo('post', post.id);
  }
}
