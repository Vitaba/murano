import { categoriesComponent } from '../../components/index';

fixture('Categories - Name Projection Story')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.nameProjection}`);

test('Should have the name with content-projection', async t => {
  await t
    .expect(await categoriesComponent.container.find('b').textContent)
    .eql('Name Extra Template');
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

fixture('Categories Name Projection Story - Combinations')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.nameProjection}
&knob-name_data=History&knob-image alt_data=History Category&knob-image value_data=https://image.flaticon.com/icons/svg/2089/2089679.svg &knob-container_styles=flex items-center&knob-image_styles=w-10 h-10 rounded-none mr-4&knob-name_styles=text-blue-900 leading-none`);

test('Should have the name with content-projection', async t => {
  await t
      .expect(await categoriesComponent.container.find('b').textContent)
      .eql('Name Extra Template');
});

test('Should change the change image value', async t => {
  await t
    .expect(await categoriesComponent.container.find('img').getAttribute('src'))
    .eql('https://image.flaticon.com/icons/svg/2089/2089679.svg ');
});

test('Should have the change container style', async t => {
  await t
    .expect(await categoriesComponent.container.getAttribute('class'))
    .eql('flex items-center');
});
