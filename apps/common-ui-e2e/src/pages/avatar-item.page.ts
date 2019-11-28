import { Selector } from 'testcafe';

export class AvatarItemPage {
  public storybookPath = 'http://localhost:4400/iframe.html?id=avataritemcomponent--basic';

  public container: Selector;
  public dataContainer: Selector;

  public constructor() {
    this.container = Selector('vitaba-avatar-item > div');
    this.dataContainer = Selector('vitaba-avatar-item > div > div');
  }
}
