import { Selector } from 'testcafe';

export class AvatarItemPage {
  public container: Selector;
  public dataContainer: Selector;

  public constructor() {
    this.container = Selector('vitaba-avatar-item > div');
    this.dataContainer = Selector('vitaba-avatar-item > div > div');
  }
}
