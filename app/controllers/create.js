import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CreateController extends Controller {
  @service router;
  @service store;

  @action
  createPost(evt) {
    evt.preventDefault();
    let post = this.store.createRecord('post', {
      title: this.title,
      body: this.body,
    });

    post.save().then(() => {
      // this.router.transitionTo('index');
      this.router.transitionTo('post', post.id);
    });
  }
}
