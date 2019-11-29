import { ContentLoaderModule } from '@vitaba/content-loader';
import { number, object } from '@storybook/addon-knobs';
import { AvatarItemLoaderComponent } from './avatar-item-loader.component';

// tslint:disable-next-line:no-default-export
export default {
  title: 'AvatarItemLoaderComponent',
};

export const primary = () => ({
  component: AvatarItemLoaderComponent,
  moduleMetadata: {
    declarations: [AvatarItemLoaderComponent],
    imports: [ContentLoaderModule],
  },
  props: {
    data: {
      colors: object('colors', {
        primary: '#f4f4f4',
        secondary: '#ecebeb',
      }),
      height: number('height', 100),
      speed: number('speed', 2),
      width: number('width', 1000),
    },
  },
});
