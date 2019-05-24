import Route from '@ember/routing/route';

export default Route.extend({
  redirect() {
    this.transitionTo('index.main');
  },
  model() {
    return this.get('store').findAll('todo');
  }
});
