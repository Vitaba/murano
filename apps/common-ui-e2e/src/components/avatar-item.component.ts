import { Selector } from 'testcafe';

export class AvatarItemComponent {
  public storybookPath = 'http://localhost:4400/iframe.html?id=avataritemcomponent--';
  public storybooks = {
    basic: 'basic',
    dateProjection: 'date-projection',
    imageProjection: 'image-projection',
    nameProjection: 'name-projection',
  };

  public container: Selector;
  public dataContainer: Selector;

  public constructor() {
    this.container = Selector('vitaba-avatar-item > div');
    this.dataContainer = Selector('vitaba-avatar-item > div > div');
  }
}
