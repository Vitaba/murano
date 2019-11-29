// tslint:disable:no-default-export object-literal-sort-keys

import { object, text } from '@storybook/addon-knobs';
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
    data_date: text('date', data.date, 'Avatar Data'),
    data_imageAlt: text('image Alt', data.image.alt, 'Avatar Data'),
    data_imageSrc: text('image Src', data.image.value, 'Avatar Data'),
    data_name: text('name', data.name, 'Avatar Data'),
    config_dateFormat: text('date Format', config.dateFormat, 'Avatar Config'),
    styles_container: text('container', styles.container, 'Avatar Styles'),
    styles_dataContainer: text(
      'dataContainer',
      styles.dataContainer,
      'Avatar Styles',
    ),
    styles_date: text('Date', styles.date, 'Avatar Styles'),
    styles_image: text('Image', styles.image, 'Avatar Styles'),
    styles_name: text('Name', styles.name, 'Avatar Styles'),
  },
  template: `
  <vitaba-avatar-item [data]="{
    date: data_date,
    image: {
    alt: data_imageAlt,
    value: data_imageSrc
  },
  name: data_name }"> </vitaba-avatar-item>
  <pre> {{ date }} </pre>
  `,
});

export const imageProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    config: object('styles', { ...config }),
    data: object('data', { ...data, image: undefined }),
    styles: object('styles', { ...styles }),
  },
  template: `<vitaba-avatar-item [data]="data">
  <ng-template #imageExtraTemplate> <b> Image Extra Template </b> </ng-template>
  </vitaba-avatar-item>`,
});

export const nameProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    config: object('styles', { ...config }),
    data: object('data', { ...data, name: undefined }),
    styles: object('styles', { ...styles }),
  },
  template: `<vitaba-avatar-item [data]="data">
  <ng-template #nameExtraTemplate> <b> Name Extra Template </b> </ng-template>
  </vitaba-avatar-item>`,
});

export const dateProjection = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  props: {
    config: object('styles', { ...config }),
    data: object('data', { ...data, date: undefined }),
    styles: object('styles', { ...styles }),
  },
  template: `<vitaba-avatar-item [data]="data">
  <ng-template #dateExtraTemplate> <b>Date content-projection</b> </ng-template>
  </vitaba-avatar-item>`,
});
