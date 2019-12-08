import { Selector } from 'testcafe';

export class HeaderTitleComponent {
  public storybookPath = 'http://localhost:4400/iframe.html?id=header-title--';
  public storybooks = {
    basic: 'basic',
    descriptionProjection: 'description-projection',
    lineProjection: 'line-projection',
    titleProjection: 'title-projection',
  };

  public container: Selector;

  public constructor() {
    this.container = Selector('vitaba-header-title > div');
  }
}
