import { categoriesComponent } from '../../components/index';

fixture('Categories - Image Projection Story')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.imageProjection}`);

test('Should have the image with content-projection', async t => {
  await t
    .expect(await categoriesComponent.container.find('b').textContent)
    .eql('Image Extra Template');
});

test('Should have the default text', async t => {
  await t
    .expect(await categoriesComponent.container.find('p').textContent)
    .eql('News Feed');
});

test('Should have the default container style', async t => {
  await t
    .expect(await categoriesComponent.container.getAttribute('class'))
    .eql('flex');
});

test('Should have the default name style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('p').getAttribute('class'),
    )
    .eql('text-sm text-gray-600 flex items-center');
});

fixture('Categories Image Projection Story - Combinations')
.page(`${categoriesComponent.storybookPath}
${categoriesComponent.storybooks.imageProjection}
&knob-name_data=History&knob-image alt_data=History Category&knob-image value_data=https://image.flaticon.com/icons/svg/2089/2089679.svg&knob-container_styles=flex items-center&knob-container_styles=text-sm&knob-date_styles=text-blue-600&knob-image_styles=w-10 h-10 rounded-none mr-4&knob-name_styles=text-blue-900 leading-none&knob-date format_config=short`);

test('Should have the image with content-projection', async t => {
  await t
      .expect(await categoriesComponent.container.find('b').textContent)
      .eql('Image Extra Template');
});

test('Should have the change text', async t => {
  await t
    .expect(await categoriesComponent.container.find('p').textContent)
    .eql('History');
});

test('Should have the change container style', async t => {
  await t
    .expect(await categoriesComponent.container.getAttribute('class'))
    .eql('flex items-center');
});

test('Should have the change name style', async t => {
  await t
    .expect(
      await categoriesComponent.container.find('p').getAttribute('class'),
    )
    .eql('text-blue-900 leading-none');
});

test('Should have the change date style', async t => {
  await t
    .expect(
      await categoriesComponent.container
        .find('p:nth-child(2)')
        .getAttribute('class'),
    )
    .eql('text-blue-600');
});
