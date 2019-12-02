import { avatarItemComponent } from '../../components/index';

fixture('Avatar Item - Name Projection Story')
.page(`${avatarItemComponent.storybookPath}
${avatarItemComponent.storybooks.nameProjection}`);

test('Should have the name with content-projection', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.find('b').textContent)
    .eql('Name Extra Template');
});

test('Should have the default date', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p:nth-child(2)')
      .textContent)
    .eql('Nov 26, 2019');
});

test('Should have the default image value', async t => {
  await t
    .expect(await avatarItemComponent.container.find('img').getAttribute('src'))
    .eql('https://avatars1.githubusercontent.com/u/7867954?s=400&amp;v=4');
});

test('Should have the default image alt', async t => {
  await t
    .expect(await avatarItemComponent.container.find('img').getAttribute('alt'))
    .eql('Avatar de Jhon Doe');
});

test('Should have the default container style', async t => {
  await t
    .expect(await avatarItemComponent.container.getAttribute('class'))
    .eql('flex items-center');
});

test('Should have the default data container style', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.getAttribute('class'))
    .eql('text-sm');
});

test('Should have the default image style', async t => {
  await t
    .expect(
      await avatarItemComponent.container.find('img')
      .getAttribute('class'))
    .eql('w-10 h-10 rounded-full mr-4');
});

test('Should have the default date style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p:nth-child(2)')
      .getAttribute('class'))
    .eql('text-gray-600');
});

fixture('Avatar Item Name Projection Story - Combinations')
.page(`${avatarItemComponent.storybookPath}
${avatarItemComponent.storybooks.nameProjection}
&knob-date_data=2020-01-26&knob-image alt_data=Avatar de Tommy Atkins&knob-image value_data=https://avatars1.githubusercontent.com/u/17608169?s=400&knob-date_config=mediumDate&knob-container_styles=flex&knob-dataContainer_styles=text-sm&knob-date_styles=text-blue-600&knob-image_styles=w-10 h-10 rounded-none mr-4&knob-name_styles=text-blue-900 leading-none
&knob-date format_config=short`);

test('Should have the name with content-projection', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.find('b').textContent)
    .eql('Name Extra Template');
});

test('Should change the change date', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p:nth-child(2)')
      .textContent)
    .eql('1/26/20, 12:00 AM');
});

test('Should change the change image value', async t => {
  await t
    .expect(await avatarItemComponent.container.find('img').getAttribute('src'))
    .eql('https://avatars1.githubusercontent.com/u/17608169?s=400');
});

test('Should have the change image alt', async t => {
  await t
    .expect(await avatarItemComponent.container.find('img').getAttribute('alt'))
    .eql('Avatar de Tommy Atkins');
});

test('Should have the change container style', async t => {
  await t
    .expect(await avatarItemComponent.container.getAttribute('class'))
    .eql('flex');
});

test('Should have the change image style', async t => {
  await t
    .expect(
      await avatarItemComponent.container.find('img')
      .getAttribute('class'))
    .eql('w-10 h-10 rounded-none mr-4');
});

test('Should have the change date style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p:nth-child(2)')
      .getAttribute('class'))
    .eql('text-blue-600');
});
