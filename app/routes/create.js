import Route from '@ember/routing/route';

export default class CreateRoute extends Route {
  setupController(controller, model) {
    controller.set('title', '');
    controller.set('body', '');
  }
}
