import { avatarItemComponent } from '../../components/index';

fixture('Avatar Item - Image Projection Story')
.page(`${avatarItemComponent.storybookPath}
${avatarItemComponent.storybooks.imageProjection}`);

test('Should have the image with content-projection', async t => {
  await t
    .expect(await avatarItemComponent.container.find('b').textContent)
    .eql('Image Extra Template');
});

test('Should have the default text', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.find('p').textContent)
    .eql('Jhon Doe');
});

test('Should change the change date', async t => {
  await t
      .expect(
        await avatarItemComponent.dataContainer.find('p:nth-child(2)')
        .textContent)
      .eql('Nov 26, 2019');
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

test('Should have the default name style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p').getAttribute('class'),
    )
    .eql('text-gray-900 leading-none');
});

test('Should have the default date style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer
        .find('p:nth-child(2)')
        .getAttribute('class'),
    )
    .eql('text-gray-600');
});

fixture('Avatar Item Image Projection Story - Combinations')
.page(`${avatarItemComponent.storybookPath}
${avatarItemComponent.storybooks.imageProjection}
&knob-date_data=2020-01-26&knob-date_config=mediumDate&knob-container_styles=
flex&knob-dataContainer_styles=text-sm&knob-date_styles=text-blue-600
&knob-image_styles=w-10 h-10 rounded-none mr-4&knob-name_styles=
text-blue-900 leading-none&knob-date format_config=short`);

test('Should have the image with content-projection', async t => {
  await t
      .expect(await avatarItemComponent.container.find('b').textContent)
      .eql('Image Extra Template');
});

test('Should have the change text', async t => {
  await t
    .expect(await avatarItemComponent.dataContainer.find('p').textContent)
    .eql('Jhon Doe');
});

test('Should change the change date', async t => {
  await t
      .expect(
        await avatarItemComponent.dataContainer.find('p:nth-child(2)')
        .textContent)
      .eql('1/26/20, 12:00 AM');
});

test('Should have the change container style', async t => {
  await t
    .expect(await avatarItemComponent.container.getAttribute('class'))
    .eql('flex');
});

test('Should have the change name style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer.find('p').getAttribute('class'),
    )
    .eql('text-blue-900 leading-none');
});

test('Should have the change date style', async t => {
  await t
    .expect(
      await avatarItemComponent.dataContainer
        .find('p:nth-child(2)')
        .getAttribute('class'),
    )
    .eql('text-blue-600');
});
