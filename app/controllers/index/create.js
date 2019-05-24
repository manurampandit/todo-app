import Controller from "@ember/controller";
import Ember from 'ember';
export default Controller.extend({
  actions: {
    createTodo(todo) {
      todo
        .save()
        .then(() => {
          Ember.Logger.info("todo created succeessfully");
          this.transitionToRoute('index.main');
        })
        .catch((ex) => {
          Ember.Logger.error("Some error in creation", ex);
        });
    }
  }
});
