import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

// tslint:disable-next-line: prefer-on-push-component-change-detection
@Component({
  selector: 'vitaba-control-errors',
  styleUrls: ['./control-errors.component.scss'],
  templateUrl: './control-errors.component.html',
})
export class ControlErrorsComponent {
  public errorsMsg
  // tslint:disable-next-line: no-any
  : { [key: string]: any } = {
    email: () => `Provide a valid email`,
    minlength: ({
      requiredLength,
      actualLength,
    }: {
      requiredLength: number;
      actualLength: number;
    }) =>
      `Expect ${requiredLength} but got ${actualLength}`,
    // tslint:disable-next-line: no-any
    required: (_error: any) => `This field is required`,
  };

  @Input() public fControl!: AbstractControl;

  // tslint:disable-next-line: no-unsafe-any
  @Input('errorsMsg')
  // tslint:disable-next-line: no-any
  public set errorsMsgData(msgErrors: { [key: string]: any }) {
    this.errorsMsg = msgErrors;
  }

  public getControl() {
    // tslint:disable-next-line: no-any
    return this.fControl.errors as Map<string, any>;
  }

  public trackByFn(index, _item) {
    return index;
  }
}
