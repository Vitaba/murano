import { object, text } from '@storybook/addon-knobs';
import { AvatarItemComponent } from './avatar-item.component';

// tslint:disable-next-line:no-default-export
export default {
  title: 'AvatarItemComponent',
};

export const primary = () => ({
  moduleMetadata: {
    declarations: [AvatarItemComponent],
    imports: [],
  },
  template: `<vitaba-avatar-item [data]="data">
  <ng-template #dateExtraTemplate> jojojo </ng-template>
  </vitaba-avatar-item>`,
  props: {
    data: object('data', {
      date: '2019-11-26T15:03:29.435Z',
      image: {
        alt: 'Avatar de Sebastian',
        value: 'https://avatars1.githubusercontent.com/u/7867954?s=400&v=4',
      },
      name: 'Sebastian',
    }),
  },
});
