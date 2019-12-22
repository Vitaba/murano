// tslint:disable:ter-max-len
import { inputLabelComponent } from '../../components/index';

fixture.only('Input Label - Basic Story')
    .page(`${inputLabelComponent.storybookPath}
${inputLabelComponent.storybooks.basic}`);

test('Should have the default class for the container', async t => {
  await t
        .expect(await inputLabelComponent.container
            .getAttribute('class'))
    .eql(`md:w-1/3`);
});

test('Should have the default label style', async t => {
  await t
          .expect(await inputLabelComponent.container.find('label')
              .getAttribute('class'))
      .eql(`block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`);
});

test('Should have the default label', async t => {
  await t
        .expect(
            await inputLabelComponent.container.find('label').textContent)
        .eql('Name');
});

fixture.only('Input Control - Combinations')
    .page(`${inputLabelComponent.storybookPath}
${inputLabelComponent.storybooks.basic}
&knob-container_styles=w-full&knob-label_styles=block text-orange-500 font-bold md:text-right mb-1 md:mb-0 pr-4&knob-label_data=telephone`);

test('Should have the changed class for the container', async t => {
  await t
          .expect(await inputLabelComponent.container
              .getAttribute('class'))
      .eql(`w-full`);
});

test('Should have the changed label style', async t => {
  await t
            .expect(await inputLabelComponent.container.find('label')
                .getAttribute('class'))
        .eql(`block text-orange-500 font-bold md:text-right mb-1 md:mb-0 pr-4`);
});

test('Should have the changed label', async t => {
  await t
          .expect(
              await inputLabelComponent.container.find('label').textContent)
          .eql('telephone');
});
