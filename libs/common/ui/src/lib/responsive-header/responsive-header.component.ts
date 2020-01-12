// tslint:disable: no-unsafe-any no-any
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GuardError, isResponsiveHeaderData, isResponsiveHeaderStyles, ResponsiveHeaderData, ResponsiveHeaderStyles } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-responsive-header',
  styleUrls: ['./responsive-header.component.scss'],
  templateUrl: './responsive-header.component.html',
})
export class ResponsiveHeaderComponent implements AfterViewInit, OnChanges {
  public changes!: BehaviorSubject<SimpleChanges>;
  public errors!: GuardError;

  @Input() public data: ResponsiveHeaderData = {
    formControlPlaceholder: `Search the items "(Press / to focus)"`,
    formControlType: 'text',
    title: 'Murano Admin',
  };

  @Input() public styles: ResponsiveHeaderStyles = {
    container: 'flex bg-white-400 border-b border-gray-300',
    formContainer: 'flex w-5/6 p-2',
    formControlContainer: 'flex',
    // tslint:disable-next-line:ter-max-len
    formControlInput: 'transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input outline-none',
    formSectionOne: 'w-11/12',
    formSectionTwo: 'w-1/12 flex items-center justify-center',
    // tslint:disable-next-line:ter-max-len
    menuButton: `flex items-center px-3 py-3 border rounded text-gray-500 outline-none focus:outline-none`,
    title: 'font-sans text-xl tracking-tight text-black-400 select-none',
    titleContainer: 'flex items-center justify-center w-1/6 p-2',
  };

  @ContentChild('menuExtraTemplate', { static: false })

  @Output() public readonly changed = new EventEmitter<any>();

  public menuExtraTemplate!: TemplateRef<any>;

  public form = this._fBuilder.group({
    search: '',
  });

  public constructor(
    private readonly _fBuilder: FormBuilder,
    private readonly _changeDetectorRef: ChangeDetectorRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.changes) {
      this.changes = new BehaviorSubject(changes);
    }
    this.changes.next(changes);
  }

  public ngAfterViewInit(): void {
    this.changes.subscribe((changes: SimpleChanges) => {
      if (changes.data) {
        const validation =
        this.validateResponsiveHeaderData(
          changes.data.currentValue as ResponsiveHeaderData);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      if (changes.styles) {
        const validation =
        this.validateHeaderStyles(
          changes.styles.currentValue as ResponsiveHeaderStyles);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      this._changeDetectorRef.detectChanges();
      this.listenFormChanges();
    });
  }

  public listenFormChanges() {
    this.form.valueChanges.subscribe(() => {
      this.changed.emit(this.form.value);
    });
  }

  public validateResponsiveHeaderData(value: ResponsiveHeaderData) {
    const validations = [
      {
        name: 'formControlPlaceholder',
        type: 'string',
      },
      {
        name: 'formControlType',
        type: 'string',
      },
      {
        name: 'title',
        type: 'string',
      },
    ];

    const validation = isResponsiveHeaderData(value, validations);

    return !validation.valid ? validation : undefined;
  }

  public validateHeaderStyles(value: ResponsiveHeaderStyles) {
    const validations = [
      {
        name: 'container',
        type: 'string',
      },
      {
        name: 'formContainer',
        type: 'string',
      },
      {
        name: 'formControlContainer',
        type: 'string',
      },
      {
        name: 'formSectionOne',
        type: 'string',
      },
      {
        name: 'formSectionTwo',
        type: 'string',
      },
      {
        name: 'menuButton',
        type: 'string',
      },
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'titleContainer',
        type: 'string',
      },
    ];

    const validation = isResponsiveHeaderStyles(value, validations);

    return !validation.valid ? validation : undefined;
  }
}
