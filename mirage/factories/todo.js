import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `TODO item ${i + 1}`;
  },
  description(i) {
    return `Some random description for TODO item ${i +
      1} with some random faker generated address to add random description `;
  },
});
