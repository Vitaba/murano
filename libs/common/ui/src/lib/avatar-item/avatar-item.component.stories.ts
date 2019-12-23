// tslint:disable:no-default-export object-literal-sort-keys
import { text } from '@storybook/addon-knobs';
import { AvatarItemComponent } from './avatar-item.component';
export default {
  title: 'AvatarItemComponent',
};

const data = {
  date: '2019-11-26',
  image: {
    alt: 'Avatar de Jhon Doe',
    value: 'https://avatars1.githubusercontent.com/u/7867954?s=400&v=4',
  },
  name: 'Jhon Doe',
};

const styles = {
  container: 'flex items-center',
  dataContainer: 'text-sm',
  date: 'text-gray-600',
  image: 'w-10 h-10 rounded-full mr-4',
  name: 'text-gray-900 leading-none',
};

const config = {
  dateFormat: 'mediumDate',
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    data_date: text('date', data.date, 'data'),
    data_imageAlt: text('image alt', data.image.alt, 'data'),
    data_imageValue: text('image value', data.image.value, 'data'),
    data_name: text('name', data.name, 'data'),
    config_dateFormat: text('date format', config.dateFormat, 'config'),
    styles_container: text('container', styles.container, 'styles'),
    styles_dataContainer: text(
      'dataContainer',
      styles.dataContainer,
      'styles',
    ),
    styles_date: text('date', styles.date, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `
  <vitaba-avatar-item
  [data]="
    {
      date: data_date,
      image: {
      alt: data_imageAlt,
      value: data_imageValue
    },
      name: data_name
    }"
  [styles]="
    {
    container: styles_container,
    dataContainer: styles_dataContainer,
    date: styles_date,
    image: styles_image,
    name: styles_name
    }
  "
  [config]="
    {
    dateFormat: config_dateFormat
    }">
  </vitaba-avatar-item>
  `,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});

export const imageProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    data_date: text('date', data.date, 'data'),
    data_name: text('name', data.name, 'data'),
    config_dateFormat: text('date format', config.dateFormat, 'config'),
    styles_container: text('container', styles.container, 'styles'),
    styles_dataContainer: text(
      'dataContainer',
      styles.dataContainer,
      'styles',
    ),
    styles_date: text('date', styles.date, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `<vitaba-avatar-item
  [data]="
    {
      date: data_date,
      name: data_name
    }"
  [styles]="
    {
    container: styles_container,
    dataContainer: styles_dataContainer,
    date: styles_date,
    image: styles_image,
    name: styles_name
    }
  "
  [config]="
    {
    dateFormat: config_dateFormat
    }">
  <ng-template #imageExtraTemplate> <b>Image Extra Template</b> </ng-template>
  </vitaba-avatar-item>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});

export const nameProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    data_date: text('date', data.date, 'data'),
    data_imageAlt: text('image alt', data.image.alt, 'data'),
    data_imageValue: text('image value', data.image.value, 'data'),
    config_dateFormat: text('date format', config.dateFormat, 'config'),
    styles_container: text('container', styles.container, 'styles'),
    styles_dataContainer: text(
      'dataContainer',
      styles.dataContainer,
      'styles',
    ),
    styles_date: text('date', styles.date, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `<vitaba-avatar-item
  [data]="
    {
      date: data_date,
      image: {
      alt: data_imageAlt,
      value: data_imageValue
    }
  }"
  [styles]="
    {
    container: styles_container,
    dataContainer: styles_dataContainer,
    date: styles_date,
    image: styles_image,
    name: styles_name
    }
  "
  [config]="
    {
    dateFormat: config_dateFormat
    }">
  <ng-template #nameExtraTemplate> <b>Name Extra Template</b> </ng-template>
  </vitaba-avatar-item>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});

export const dateProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    data_imageAlt: text('image alt', data.image.alt, 'data'),
    data_imageValue: text('image value', data.image.value, 'data'),
    data_name: text('name', data.name, 'data'),
    config_dateFormat: text('date format', config.dateFormat, 'config'),
    styles_container: text('container', styles.container, 'styles'),
    styles_dataContainer: text(
      'dataContainer',
      styles.dataContainer,
      'styles',
    ),
    styles_date: text('date', styles.date, 'styles'),
    styles_image: text('image', styles.image, 'styles'),
    styles_name: text('name', styles.name, 'styles'),
  },
  template: `<vitaba-avatar-item
  [data]="
    {
      image: {
      alt: data_imageAlt,
      value: data_imageValue
    },
      name: data_name
    }"
  [styles]="
    {
    container: styles_container,
    dataContainer: styles_dataContainer,
    date: styles_date,
    image: styles_image,
    name: styles_name
    }
  "
  [config]="
    {
    dateFormat: config_dateFormat
    }">
  <ng-template #dateExtraTemplate> <b>Date Extra Template</b> </ng-template>
  </vitaba-avatar-item>`,
  stylesUrl: [
    'node_modules/tailwindcss/dist/base',
    'node_modules/tailwindcss/dist/components',
    'node_modules/tailwindcss/dist/utilities',
  ]
});
