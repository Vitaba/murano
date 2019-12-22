// tslint:disable:no-default-export object-literal-sort-keys ter-max-len

import { FormControl } from '@angular/forms';
import { text } from '@storybook/addon-knobs';
import { InputControlComponent } from './input-control.component';

export default {
  title: 'Input Control',
};

const config = {
  fControl: new FormControl('sample'),
  placeholder: 'placeholder',
  type: 'text',
};

const styles = {
  container: `md:w-2/3`,
  input: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [InputControlComponent],
    imports: [],
  },
  props: {
    config_placeholder: text('placeholder', config.placeholder, 'config'),
    config_type: text('type', config.type, 'config'),
    styles_container: text('container', styles.container, 'styles'),
    styles_input: text('input', styles.input, 'styles'),
  },
  template: `
  <vitaba-input-control
    [config]="{
    placeholder: config_placeholder,
    type: config_type
    }"
    [styles]="{
    container: styles_container,
    input: styles_input
    }"
    > </vitaba-input-control>
  `,
});
