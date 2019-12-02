// tslint:disable:no-default-export object-literal-sort-keys ter-max-len

import { text } from '@storybook/addon-knobs';
import { HeaderTitleComponent } from './header-title.component';
export default {
  title: 'Header Title ',
};

const data = {
  description: 'Useful resources and assets for users.',
  title: 'News',
};

const styles = {
  container: 'font-sans font-light leading-normal markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4',
  description: 'mt-0 mb-4 text-gray-600',
  line: 'my-8 border-b-2 border-gray-200',
  title: 'text-3xl text-gray-900',
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [HeaderTitleComponent],
    imports: [],
  },
  props: {
    data_title: text('title', data.title, 'data'),
    data_description: text('description', data.description, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_title: text('title', styles.title, 'styles'),
    styles_description: text('description', styles.description, 'styles'),
    styles_line: text('line', styles.line, 'styles'),
  },
  template: `
  <vitaba-header-title
    [data]="{
    title: data_title,
    description: data_description
    }"
    [styles]="{
    container: styles_container,
    description: styles_description,
    line: styles_line,
    title: styles_title
    }"
    > </vitaba-header-title>
  `,
});
