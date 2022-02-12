import { Factory } from 'miragejs';
 
import faker from 'faker';

export default {
  user: Factory.extend({
    first_name() {
      return faker.fake('{{name.findName}}');
    },
    last_name() {
      return faker.fake('{{name.findName}}');
    },
    number() {
      return Math.ceil(Math.random()*100)
    }, 
  }),
};
