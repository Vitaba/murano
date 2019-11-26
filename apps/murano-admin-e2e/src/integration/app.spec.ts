import { Selector } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';

const header = Selector('.sample');

fixture('Home')
 .page('http://localhost:4200/')
 .beforeEach(async () => waitForAngular());

test('Sample', async t => {
  await t.expect(header.textContent).contains('Sample');
});
