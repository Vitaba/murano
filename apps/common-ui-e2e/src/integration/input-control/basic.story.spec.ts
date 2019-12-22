// tslint:disable:ter-max-len
import { inputControlComponent } from '../../components/index';

fixture('Input Control - Basic Story')
    .page(`${inputControlComponent.storybookPath}
${inputControlComponent.storybooks.basic}`);

test('Should have the default class for the container', async t => {
  await t
        .expect(await inputControlComponent.container
            .getAttribute('class'))
    .eql(`md:w-2/3`);
});

test('Should have the default input style', async t => {
  await t
          .expect(await inputControlComponent.container.find('input')
              .getAttribute('class'))
      .eql(`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`);
});

test('Should have the default input type', async t => {
  await t
        .expect(
            await inputControlComponent.container.find('input').getAttribute('type'))
        .eql('text');
});

test('Should have the default placeholder', async t => {
  await t
        .expect(
            await inputControlComponent.container.find('input')
                .getAttribute('placeholder'))
        .eql('placeholder');
});

fixture('Input Control - Combinations')
    .page(`${inputControlComponent.storybookPath}
${inputControlComponent.storybooks.basic}
&knob-container_styles=w-full&knob-input_styles=bg-orange-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500&knob-placeholder_config=write your telephone...&knob-type_config=tel`);

test('Should have the default class for the container', async t => {
  await t
          .expect(await inputControlComponent.container
              .getAttribute('class'))
      .eql(`w-full`);
});

test('Should have the default input style', async t => {
  await t
            .expect(await inputControlComponent.container.find('input')
                .getAttribute('class'))
        .eql(`bg-orange-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`);
});

test('Should have the default input type', async t => {
  await t
          .expect(
              await inputControlComponent.container.find('input').getAttribute('type'))
          .eql('tel');
});

test('Should have the default placeholder', async t => {
  await t
          .expect(
              await inputControlComponent.container.find('input')
                  .getAttribute('placeholder'))
          .eql('write your telephone...');
});
