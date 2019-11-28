import { object } from '@storybook/addon-knobs';
import { AvatarItemComponent } from './avatar-item.component';
// tslint:disable-next-line:no-default-export
export default {
  title: 'AvatarItemComponent',
};

const data = {
  date: '2019-11-26T15:03:29.435Z',
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
    config: object('styles', { ...config }),
    data: object('data', data),
    styles: object('styles', { ...styles }),
  },
  template: `<vitaba-avatar-item [data]="data"> </vitaba-avatar-item>`,
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
