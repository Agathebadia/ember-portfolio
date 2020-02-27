import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user navigation', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /user-navigation', async function(assert) {
    await visit('/user-navigation');

    assert.equal(currentURL(), '/user-navigation');
  });
});
