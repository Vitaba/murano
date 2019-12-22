import { Selector } from 'testcafe';

export class InputControlComponent {
  public storybookPath = 'http://localhost:5001/iframe.html?id=input-control--';
  public storybooks = {
    basic: 'basic',
  };

  public container: Selector;

  public constructor() {
    this.container = Selector('vitaba-input-control > div');
  }
}
