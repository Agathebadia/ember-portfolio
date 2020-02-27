import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user navigation', function(hooks) {
  setupApplicationTest(hooks);

  test('I should be able to navigate to the about page', async function(assert) {
    await visit('/');

    assert.dom('.about-contact').exists({ count: 1 }, 'About is visible');
    assert.dom('.about-contact a').exists({ count: 1 }, 'The link to the about page is visible');
    await click('.about-contact a');

    assert.equal(currentURL(), '/about', 'it navigates to the about page');
  });

  test('I should be able to navigate to the home page', async function(assert) {
    await visit('/about');

    assert.dom('.home').exists({ count: 1}, 'Home is visible');
    assert.dom('.home a').exists({ count: 1 }, 'The link to the home page is visible');
    await click('.home a');

    assert.equal(currentURL(), '/', 'it navigates to the home page');
  });
});
