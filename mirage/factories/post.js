import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(idx) {
    return `Post Title ${idx}`;
  },
  body() {
    return faker.random.words();
  },
});
