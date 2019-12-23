// tslint:disable:no-default-export object-literal-sort-keys ter-max-len

import { text } from '@storybook/addon-knobs';
import { InputLabelComponent } from './input-label.component';

export default {
  title: 'Input Label',
};

const data = {
  label: 'Name',
};

const styles = {
  container: `md:w-1/3`,
  label: `block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [InputLabelComponent],
    imports: [],
  },
  props: {
    data_label: text('label', data.label, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_label: text('label', styles.label, 'styles'),
  },
  template: `
  <vitaba-input-label
    [data]="{
    label: data_label
    }"
    [styles]="{
    container: styles_container,
    label: styles_label
    }"
    > </vitaba-input-label>
  `,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});
