import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { AvatarData, GuardError, HeaderData, HeaderStyles, isHeaderData } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-header-title',
  styleUrls: ['./header-title.component.scss'],
  templateUrl: './header-title.component.html',
})
export class HeaderTitleComponent implements OnChanges, AfterViewInit {
  public changes!: BehaviorSubject<SimpleChanges>;
  public errors!: GuardError;

  @Input() public styles: HeaderStyles = {
    container: `font-sans font-light leading-normal markdown mb-6 px-6
    max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4`,
    description: 'mt-0 mb-4 text-gray-600',
    line: 'my-8 border-b-2 border-gray-200',
    title: 'text-3xl text-gray-900',
  };
  @Input() public data: HeaderData = {
    description: 'Useful resources and assets for users.',
    title: 'News',
  };

  @ContentChild('titleExtraTemplate', { static: false })
  // tslint:disable-next-line:no-any
  public titleExtraTemplate!: TemplateRef<any>;

  @ContentChild('descriptionExtraTemplate', { static: false })
  // tslint:disable-next-line:no-any
  public descriptionExtraTemplate!: TemplateRef<any>;

  @ContentChild('lineExtraTemplate', { static: false })
  // tslint:disable-next-line:no-any
  public lineExtraTemplate!: TemplateRef<any>;

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
    this.changes.subscribe((changes: SimpleChanges) => {
      if (changes.data) {
        const validation =
        this.validateHeaderData(changes.data.currentValue as HeaderData);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      if (changes.styles) {
        const validation =
        this.validateHeaderStyles(changes.styles.currentValue as HeaderStyles);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }

      this._changeDetectorRef.detectChanges();
    });
  }

  public validateHeaderData(value: HeaderData) {
    const validations = [];

    if (!this.titleExtraTemplate) {
      validations.push({
        name: 'title',
        type: 'string',
      });
    }

    if (!this.descriptionExtraTemplate) {
      validations.push({
        name: 'description',
        type: 'string',
      });
    }

    const validation = isHeaderData(value, validations);

    return !validation.valid ? validation : undefined;
  }

  public validateHeaderStyles(value: HeaderStyles) {
    const validations = [];

    if (!this.titleExtraTemplate) {
      validations.push({
        name: 'title',
        type: 'string',
      });
    }

    if (!this.descriptionExtraTemplate) {
      validations.push({
        name: 'description',
        type: 'string',
      });
    }
    if (!this.lineExtraTemplate) {
      validations.push({
        name: 'line',
        type: 'string',
      });
    }

    const validation = isHeaderData(value, validations);

    return !validation.valid ? validation : undefined;
  }
}
