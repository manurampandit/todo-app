import { module, test } from 'qunit';
import { setupRenderingTest,  } from 'ember-qunit';
import { render ,findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | page-header', function(hooks) {
  setupRenderingTest(hooks);

  test('Checking nav bar is present', async function(assert) {
    assert.expect(5);
    await render(hbs`{{page-header}}`);

    // await this.pauseTest();

    assert.dom('[data-test-id="home-first-tab"]').exists();
    assert.dom('.nav-item').exists({ count: 2 });
    assert.equal(findAll('.nav-item').length, 2, 'Assuring length is 2');
    assert.dom('.nav-item').includesText("Home");
    // assert.ok(document.querySelectorAll('.nav-item')[1].textContent.includes('Create'), 'Nav item also contains Create as second tab');
    assert.dom('[data-test-id="home-second-tab"').includesText('Create');

  });
});
