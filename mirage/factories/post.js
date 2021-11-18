import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return 'Post Title';
  },
  body() {
    return 'Post Body';
  },
});
