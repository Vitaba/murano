import { Selector } from 'testcafe';

export class CategoriesComponent {
  public storybookPath = 'http://localhost:4400/iframe.html?id=categoriescomponent--';
  public storybooks = {
    basic: 'basic',
    imageProjection: 'image-projection',
    nameProjection: 'name-projection',
  };

  public container: Selector;
  public dataContainer: Selector;

  public constructor() {
    this.container = Selector('vitaba-categories > div');
  }
}
