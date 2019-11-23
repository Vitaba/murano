import { array, boolean, number, object, text } from '@storybook/addon-knobs';
import { CommonUiModule } from '../common-ui.module';
import { CardListComponent } from './card-list.component';

export default {
  title: 'CardListComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: CardListComponent,
  props: {
    items: object('items',
      [{
        name: 'Item 1',
        value: 1,
      },
        {
          name: 'Item 2',
          value: 2,
        }],
  ),
  },
});
