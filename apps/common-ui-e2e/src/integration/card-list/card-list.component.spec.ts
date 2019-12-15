import { Selector } from 'testcafe';

const header = Selector('.sample');

fixture('Home 1')
 .page('http://localhost:5001/iframe.html?id=cardlistcomponent--primary&knob-items=[{%22name%22:%22a%22,%22value%22:%22a%22}]');

test('Card List Works', async t => {
  await t
        .expect(header.textContent).contains('Sample');
});
