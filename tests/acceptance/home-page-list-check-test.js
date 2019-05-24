import { module, test } from 'qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | home page list check', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('visiting / url leads to /main url', async function(assert) {
    this.server.createList('todo', 5);
    await visit('/');
    assert.equal(currentURL(), '/main', 'Renders main url');
  });

  test('visiting / url renders 5 todo items', async function(assert) {
    this.server.createList('todo', 5);
    await visit('/');
    assert.equal(findAll('.todo-item').length, 5, "Renders 5 todo components");

  });
});
