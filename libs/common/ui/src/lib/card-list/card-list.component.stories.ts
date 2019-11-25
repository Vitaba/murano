import { object, text } from '@storybook/addon-knobs';
import { CardListComponent } from './card-list.component';

// tslint:disable-next-line:no-default-export
export default {
  title: 'CardListComponent',
};

export const primary = () => ({
  component: CardListComponent,
  moduleMetadata: {
    imports: [],
  },
  props: {
    items: object('items', [
      {
        name: 'Item 1',
        value: 1,
      },
      {
        name: 'Item 2',
        value: 2,
      },
    ]),
    styles: object('styles', {
      items: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded',
      title: 'font-sans text-lg text-gray-800 text-center mb-3',
    }),
    title: text('title', 'Sample Title'),
  },
});
