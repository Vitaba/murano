// tslint:disable:no-default-export object-literal-sort-keys
import { text } from '@storybook/addon-knobs';
import { CategoriesComponent } from './categories.component';
export default {
  title: 'CategoriesComponent',
};

const data = {
  image: {
    alt: 'Category Icon',
    value: 'https://www.materialui.co/materialIcons/action/lock_black_144x144.png',
  },
  name: 'News Feed',
};

const styles = {
  container: 'flex',
  image: 'w-6 h-6',
  name: 'text-sm text-gray-600 flex items-center',
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [CategoriesComponent],
    imports: [],
  },
  props: {
    data_image_alt: text('image alt', data.image.alt, 'data'),
    data_image_value: text('image value', data.image.value, 'data'),
    data_name: text('name', data.name, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `
  <vitaba-categories
  [data]="
  {
    image: {
      alt: data_image_alt,
      value: data_image_value
    },
    name: data_name
  }"
  [styles]="
  {
    container: styles_container,
    image: styles_image,
    name: styles_name
  }
  ">
  </vitaba-categories>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});

export const nameProjection = () => ({
  moduleMetadata: {
    declarations: [CategoriesComponent],
    imports: [],
  },
  props: {
    data_image_alt: text('image alt', data.image.alt, 'data'),
    data_image_value: text('image value', data.image.value, 'data'),
    data_name: text('name', data.name, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `
  <vitaba-categories
  [data]="
  {
    image: {
      alt: data_image_alt,
      value: data_image_value
    },
    name: data_name
  }"
  [styles]="
  {
    container: styles_container,
    image: styles_image,
    name: styles_name
  }
  ">
  <ng-template #nameExtraTemplate> <b>Name Extra Template</b> </ng-template>
  </vitaba-categories>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});

export const imageProjection = () => ({
  moduleMetadata: {
    declarations: [CategoriesComponent],
    imports: [],
  },
  props: {
    data_image_alt: text('image alt', data.image.alt, 'data'),
    data_image_value: text('image value', data.image.value, 'data'),
    data_name: text('name', data.name, 'data'),
    styles_container: text('container', styles.container, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `
  <vitaba-categories
  [data]="
  {
    image: {
      alt: data_image_alt,
      value: data_image_value
    },
    name: data_name
  }"
  [styles]="
  {
    container: styles_container,
    image: styles_image,
    name: styles_name
  }
  ">
  <ng-template #imageExtraTemplate> <b>Image Extra Template</b> </ng-template>
  </vitaba-categories>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});
