import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GuardError, InputConfig, InputStyles, isInputConfig, isInputStyles } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-input-control',
  styleUrls: ['./input-control.component.scss'],
  templateUrl: './input-control.component.html',
})
export class InputControlComponent implements OnChanges, AfterViewInit {
  public changes!: BehaviorSubject<SimpleChanges>;
  public errors!: GuardError;

  @Input() public config: InputConfig = {
    fControl: new FormControl('sample'),
    placeholder: 'placeholder',
    type: 'text',
  };

  @Input() public styles: InputStyles = {
    container: `md:w-2/3`,
    // tslint:disable-next-line:ter-max-len
    input: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`,
  };

  public constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('hey', changes);
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
      if (changes.config) {
        const validation =
        this.validateInputConfig(changes.config.currentValue as InputConfig);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }

      if (changes.styles) {
        const validation =
        this.validateInputStyles(changes.styles.currentValue as InputStyles);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      this._changeDetectorRef.detectChanges();
    });
  }

  public validateInputConfig(value: InputConfig) {
    debugger;
    const validations = [{
      name: 'placeholder',
      type: 'string',
    },
      {
        name: 'type',
        type: 'string',
      },
    ];

    if (value.type === 'number' || value.type === 'range') {
      validations.push({
        name: 'min',
        type: 'number',
      });
      validations.push({
        name: 'max',
        type: 'number',
      });
      validations.push({
        name: 'step',
        type: 'number',
      });
    }

    const validation = isInputConfig(value, validations);

    return !validation.valid ? validation : undefined;
  }

  public validateInputStyles(value: InputStyles) {
    const validations = [
      {
        name: 'container',
        type: 'string',
      },
      {
        name: 'input',
        type: 'string',
      },
    ];

    const validation = isInputStyles(value, validations);

    return !validation.valid ? validation : undefined;
  }
}
