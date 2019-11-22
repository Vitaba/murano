import { Selector } from 'testcafe';

export class HomePage {
  public title = Selector('h2');
  public toobar = Selector('div.toolbar');
  public newComponentButton = Selector('.e2e-new-component-button');
  public angularMaterialButton = Selector('.e2e-angular-material-button');
  public terminal = Selector('div.terminal');
}
