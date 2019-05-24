import { module, test,  } from 'qunit';
import { setupRenderingTest,  } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | todo-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Given
    this.todo = {
      name: 'My TODO',
      description: 'Some random description for my todo component',
    }
    // When
    await render(hbs`{{todo-item todo=todo}}`);
    // Then
    assert.dom('.card-header').exists();
    assert.dom('.card-header').includesText(this.todo.name);

  });

  test('Clicking on show button displays the description box', async function(assert) {
    // Given
    this.todo = {
      name: 'My TODO',
      description: 'Some random description for my todo component',
    }
    // When
    await render(hbs`{{todo-item todo=todo}}`);
    await click('[data-test-id="toggle-btn"');

    // then
    assert.dom('.card-body').exists();
    assert.dom('.card-body').hasText(this.todo.description);
  });

  test('Clicking on hide button hides the description box', async function(assert) {
    // Given
    this.todo = {
      name: 'My TODO',
      description: 'Some random description for my todo component',
    }
    // When
    await render(hbs`{{todo-item todo=todo}}`);
    await click('[data-test-id="toggle-btn"');
    // check button text contains hide now
    assert.dom('[data-test-id="toggle-btn"').hasText('hide');
    await click('[data-test-id="toggle-btn"');

    // then
    assert.dom('.card-body').doesNotExist();
  });

});
