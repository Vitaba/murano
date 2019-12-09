import { categoriesComponent } from '../../components/index';

fixture('Categories - Basic Story')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.basic}`);

test('Should have the default text', async t => {
  await t
    .expect(await categoriesComponent.container.find('p').textContent)
    .eql('News Feed');
});

test('Should have the default image value', async t => {
  await t
    .expect(await categoriesComponent.container.find('img').getAttribute('src'))
    .eql('https://www.materialui.co/materialIcons/action/lock_black_144x144.png');
});

test('Should have the default image alt', async t => {
  await t
    .expect(await categoriesComponent.container.find('img').getAttribute('alt'))
    .eql('Category Icon');
});

test('Should have the default container style', async t => {
  await t
    .expect(await categoriesComponent.container.getAttribute('class'))
    .eql('flex');
});

test('Should have the default image style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('img')
      .getAttribute('class'))
    .eql('w-6 h-6');
});

test('Should have the default name style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('p').getAttribute('class'))
    .eql('text-sm text-gray-600 flex items-center');
});

fixture('Categories Basic Story - Combinations')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.basic}
&knob-name_data=History&knob-image alt_data=History Category&knob-image value_data=https://image.flaticon.com/icons/svg/2089/2089679.svg &knob-container_styles=flex items-center&knob-image_styles=w-10 h-10 rounded-none mr-4&knob-name_styles=text-blue-900 leading-none`)

test('Should change the change text', async t => {
  await t
    .expect(await categoriesComponent.container.find('p').textContent)
    .eql('History');
});

test('Should change the change image value', async t => {
  await t
    .expect(await categoriesComponent.container.find('img').getAttribute('src'))
    .eql('https://image.flaticon.com/icons/svg/2089/2089679.svg ');
});

test('Should have the change image alt', async t => {
  await t
    .expect(await categoriesComponent.container.find('img').getAttribute('alt'))
    .eql('History Category');
});

test('Should have the change container style', async t => {
  await t
    .expect(await categoriesComponent.container.getAttribute('class'))
    .eql('flex items-center');
});

test('Should have the change image style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('img')
      .getAttribute('class'))
    .eql('w-10 h-10 rounded-none mr-4');
});

test('Should have the change name style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('p').getAttribute('class'))
    .eql('text-blue-900 leading-none');
});
