import { Selector } from 'testcafe';

export class InputLabelComponent {
  public storybookPath = 'http://localhost:5001/iframe.html?id=input-label--';
  public storybooks = {
    basic: 'basic',
  };

  public container: Selector;

  public constructor() {
    this.container = Selector('vitaba-input-label > div');
  }
}
