import { Selector } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';

const header = Selector('button');

fixture('Home')
 .page('http://localhost:4200/')
 .beforeEach(async () => waitForAngular());

test('Card List Works', async t => {
  await t.expect(header.textContent).eql('card-list works!');
});
