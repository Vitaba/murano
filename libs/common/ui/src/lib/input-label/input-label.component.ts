// tslint:disable: no-unsafe-any no-any
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GuardError, InputLabelData, InputLabelStyles, isInputLabelData, isInputLabelStyles } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-input-label',
  styleUrls: ['./input-label.component.scss'],
  templateUrl: './input-label.component.html',
})
export class InputLabelComponent implements OnChanges, AfterViewInit {
  public changes!: BehaviorSubject<SimpleChanges>;
  public errors!: GuardError;

  @Input() public data: InputLabelData = {
    label: 'Name',
  };

  @Input() public styles: InputLabelStyles = {
    container: `md:w-1/3`,
    label: `block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`,
  };

  public constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.changes) {
      this.changes = new BehaviorSubject(changes);
    }
    this.changes.next(changes);
  }

  public ngAfterViewInit(): void {
    if (!this.changes) {
      this.changes = new BehaviorSubject(null);
    }
    this.changes.subscribe((changes: SimpleChanges) => {
      if (changes.data) {
        const validation =
        this.validateInputData(changes.data.currentValue as InputLabelData);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }

      if (changes.styles) {
        const validation =
        this.validateInputLabelStyles(
          changes.styles.currentValue as InputLabelStyles);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      this._changeDetectorRef.detectChanges();
    });
  }

  public validateInputData(value: InputLabelData) {
    const validations = [{
      name: 'label',
      type: 'string',
    },
    ];

    const validation = isInputLabelData(value, validations);

    return !validation.valid ? validation : undefined;
  }

  public validateInputLabelStyles(value: InputLabelStyles) {
    const validations = [
      {
        name: 'container',
        type: 'string',
      },
      {
        name: 'label',
        type: 'string',
      },
    ];

    const validation = isInputLabelStyles(value, validations);

    return !validation.valid ? validation : undefined;
  }
}
