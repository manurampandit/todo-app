import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | todo-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.todo = {
      name: 'My TODO',
      description: 'Some random description for my todo component',
    }
    await render(hbs`{{todo-item todo=todo}}`);
    // await this.pauseTest();

    assert.dom('.card-header').exists();
    assert.dom('.card-body').exists();
    assert.dom('.card-header').hasText(this.todo.name);
    assert.dom('.card-body').hasText(this.todo.description);

  });
});
