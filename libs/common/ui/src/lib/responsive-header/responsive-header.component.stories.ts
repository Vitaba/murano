// tslint:disable:no-default-export object-literal-sort-keys ter-max-len

import { ReactiveFormsModule } from '@angular/forms';
import { text } from '@storybook/addon-knobs';
import { InputControlComponent } from '../input-control/input-control.component';
import { ResponsiveHeaderComponent } from './responsive-header.component';

export default {
  title: 'Responsive Header',
};

const data = {
  formControlPlaceholder: `Search the items (Press / to focus)`,
  formControlType: 'text',
  title: 'Murano Admin',
};

const styles = {
  container: 'flex bg-white-400 border-b border-gray-300',
  formContainer: 'flex w-5/6 p-2',
  formControlContainer: 'flex',
    // tslint:disable-next-line:ter-max-len
  formControlInput: 'transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input outline-none',
  formSectionOne: 'w-11/12',
  formSectionTwo: 'w-1/12 flex items-center justify-center',
    // tslint:disable-next-line:ter-max-len
  menuButton: `flex items-center px-3 py-3 border rounded text-gray-500 outline-none focus:outline-none`,
  title: 'font-sans text-xl tracking-tight text-black-400 select-none',
  titleContainer: 'flex items-center justify-center w-1/6 p-2',
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [ResponsiveHeaderComponent, InputControlComponent],
    imports: [ReactiveFormsModule],
  },
  props: {
    data_formControlPlaceholder: text('formControlPlaceholder', data.formControlPlaceholder, 'data'),
    data_formControlType: text('formControlType', data.formControlType, 'data'),
    data_title: text('title', data.title, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_formContainer: text('formContainer', styles.formContainer, 'styles'),
    styles_formControlContainer: text('formControlContainer', styles.formControlContainer, 'styles'),
    styles_formControlInput: text('formControlInput', styles.formControlInput, 'styles'),
    styles_formSectionOne: text('formSectionOne', styles.formSectionOne, 'styles'),
    styles_formSectionTwo: text('formSectionTwo', styles.formSectionTwo, 'styles'),
    styles_menuButton: text('menuButton', styles.menuButton, 'styles'),
    styles_title: text('title', styles.title, 'styles'),
    styles_titleContainer: text('titleContainer', styles.titleContainer, 'styles'),
  },
  template: `
  <vitaba-responsive-header
    [data]="{
      formControlPlaceholder: data_formControlPlaceholder,
      formControlType: data_formControlType,
      title: data_title
    }"
    [styles]="{
    container: styles_container,
    formContainer: styles_formContainer,
    formControlContainer: styles_formControlContainer,
    formControlInput: styles_formControlInput,
    formSectionOne: styles_formSectionOne,
    formSectionTwo: styles_formSectionTwo,
    menuButton: styles_menuButton,
    title: styles_title,
    titleContainer: styles_titleContainer
    }"
    > </vitaba-responsive-header>
  `,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ],
});
