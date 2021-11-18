import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(idx) {
    return `Post Title ${idx + 1}`;
  },
  body() {
    return faker.lorem.sentence();
  },
});
