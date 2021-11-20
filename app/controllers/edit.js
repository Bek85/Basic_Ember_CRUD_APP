import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditController extends Controller {
  @service store;

  @action
  editPost(evt) {
    evt.preventDefault();
    let post = this.model;
    post.save();
  }
}
