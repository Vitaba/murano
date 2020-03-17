// tslint:disable: no-any no-unsafe-any
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { CategoriesData, CategoriesStyles, GuardError, isCategoriesData, isCategoriesStyles } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-categories',
  styleUrls: ['./categories.component.scss'],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements AfterViewInit, OnChanges {
  public errors!: GuardError;
  public changes!: BehaviorSubject<SimpleChanges>;
  @Input() public data: CategoriesData = {
    image: {
      alt: 'News Feed Icon',
      value: 'https://www.materialui.co/materialIcons/action/lock_black_144x144.png',
    },
    name: 'News Feed',
  };

  @Input() public styles: CategoriesStyles = {
    container: 'flex',
    image: 'w-6 h-6',
    name: 'text-sm text-gray-600 flex items-center',
  };

  @ContentChild('imageExtraTemplate')
  public imageExtraTemplate!: TemplateRef<any>;

  @ContentChild('nameExtraTemplate')
  public nameExtraTemplate!: TemplateRef<any>;

  public constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

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
        this.validateCategoriesData(
          changes.data.currentValue);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      if (changes.styles) {
        const validation =
        this.validateCategoriesStyles(
          changes.styles.currentValue);

        if (validation) {
          this.errors = { ...this.errors, ...validation };
        }
      }
      this._changeDetectorRef.detectChanges();
    });
  }

  public validateCategoriesData(value: CategoriesData) {
    const validations = [];

    if (!this.nameExtraTemplate) {
      validations.push({
        name: 'name',
        type: 'string',
      });
    }

    if (!this.imageExtraTemplate) {
      validations.push({
        name: 'image',
        type: 'object',
      });
    }

    const validation = isCategoriesData(value, validations);

    return !validation.valid ? validation : undefined;
  }

  public validateCategoriesStyles(value: CategoriesData) {
    const validations = [{
      name: 'container',
      type: 'string',
    }];

    if (!this.nameExtraTemplate) {
      validations.push({
        name: 'name',
        type: 'string',
      });
    }

    if (!this.imageExtraTemplate) {
      validations.push({
        name: 'image',
        type: 'string',
      });
    }

    const validation = isCategoriesStyles(value, validations);

    return !validation.valid ? validation : undefined;
  }
}
