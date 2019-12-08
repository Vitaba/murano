// tslint:disable:ter-max-len
import { headerTitleComponent } from '../../components/index';

fixture('Header Title - Title Projection Story')
.page(`${headerTitleComponent.storybookPath}
${headerTitleComponent.storybooks.titleProjection}`);

test('Should have the title with content-projection', async t => {
  await t
    .expect(await headerTitleComponent.container.find('b').textContent)
    .eql('Title Extra Template');
});

test('Should have the default description', async t => {
  await t
    .expect(
      await headerTitleComponent.container.find('div')
      .textContent)
    .eql('Useful resources and assets for users.');
});

test('Should have the default line', async t => {
  await t
    .expect(headerTitleComponent.container.find('hr'))
    .ok();
});

test('Should have the default container style', async t => {
  await t
    .expect(await headerTitleComponent.container.getAttribute('class'))
    .eql(`font-sans font-light leading-normal markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4`);
});

test('Should have the default description style', async t => {
  await t
    .expect(
      await headerTitleComponent.container.find('div')
      .getAttribute('class'))
    .eql('mt-0 mb-4 text-gray-600');
});

test('Should have the default line style', async t => {
  await t
    .expect(
      await headerTitleComponent.container.find('hr').getAttribute('class'))
    .eql('my-8 border-b-2 border-gray-200');
});

fixture('Header Title Projection Story - Combinations')
    .page(`${headerTitleComponent.storybookPath}
${headerTitleComponent.storybooks.titleProjection}
&knob-title_data=News&knob-description_data=Lorem Ipsum
&knob-container_styles=font-serif font-light leading-normal markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4&knob-title_styles=text-3xl text-blue-900&knob-description_styles=mt-0 mb-4 text-blue-600&knob-line_styles=my-8 border-b-2 border-blue-200`);

test('Should have the title with content-projection', async t => {
  await t
      .expect(await headerTitleComponent.container.find('b').textContent)
      .eql('Title Extra Template');
});

test('Should have the change description', async t => {
  await t
      .expect(
        await headerTitleComponent.container.find('div')
        .textContent)
      .eql('Lorem Ipsum');
});

test('Should have the line', async t => {
  await t
      .expect(headerTitleComponent.container.find('hr'))
      .ok();
});

test('Should have the change container style', async t => {
  await t
      .expect(await headerTitleComponent.container.getAttribute('class'))
      .eql(`font-serif font-light leading-normal markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4`);
});

test('Should have the changed description style', async t => {
  await t
      .expect(
        await headerTitleComponent.container.find('div')
        .getAttribute('class'))
      .eql('mt-0 mb-4 text-blue-600');
});

test('Should have the changed line style', async t => {
  await t
      .expect(
        await headerTitleComponent.container.find('hr').getAttribute('class'))
      .eql('my-8 border-b-2 border-blue-200');
});
