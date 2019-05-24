import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | create form acceptance', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('visiting /create-form-acceptance', async function(assert) {
    this.server.createList('todo', 10);

    await visit('/');
    await click('[data-test-id="home-second-tab"] a');
    await fillIn('#todo-name', 'Test');
    await fillIn('#todo-description', 'Test description');
    await click('.btn-primary');

    assert.equal(findAll('.todo-item').length, 11, 'Contains newly created item');
    // assert.ok(document.querySelectorAll('.todo-item')[10].textContent.includes('Test'), 'recently added item contains the same title ')
  });
});
