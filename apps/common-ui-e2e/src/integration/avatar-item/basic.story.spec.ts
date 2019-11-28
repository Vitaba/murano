import { avatarItemComponent } from '../../pages/index';

fixture('Avatar Item - Basic Story').page(
  'http://localhost:4400/iframe.html?id=avataritemcomponent--basic',
);

fixture('Avatar Item - Image')
  .page('http://localhost:4400/iframe.html?id=avataritemcomponent--basic');

test('Should have the default image', async t => {
  await t
    .expect(await avatarItemComponent.container.find('img').getAttribute('src'))
    .eql('https://avatars1.githubusercontent.com/u/7867954?s=400&amp;v=4');
});

fixture('Avatar Item - Text')
  .page('http://localhost:4400/iframe.html?id=avataritemcomponent--basic');
test('Should have the default ', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.find('p').textContent)
    .eql('Jhon Doe');
});

fixture('Avatar Item - Date')
  .page('http://localhost:4400/iframe.html?id=avataritemcomponent--basic');
test('Should have the default ', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p:nth-child(2)')
      .textContent)
    .eql('Nov 26, 2019');
});
