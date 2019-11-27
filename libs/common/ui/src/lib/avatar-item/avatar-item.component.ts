// tslint:disable: no-unsafe-any no-any
import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { AvatarConfig, AvatarData, AvatarStyles, GuardError, isAvatarData } from '@vitaba/common-utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-avatar-item',
  styleUrls: ['./avatar-item.component.scss'],
  templateUrl: './avatar-item.component.html',
})

export class AvatarItemComponent implements AfterViewInit, OnChanges {
  public changes!: BehaviorSubject<SimpleChanges>;
  public errors!: GuardError;
  @Input() public config: AvatarConfig = {
    dateFormat: 'mediumDate',
  };
  @Input() public styles: AvatarStyles = {
    container: 'flex items-center',
    dataContainer: 'text-sm',
    date: 'text-gray-600',
    image: 'w-10 h-10 rounded-full mr-4',
    name: 'text-gray-900 leading-none',
  };
  @Input() public data: AvatarData = {
    date: '2019-11-26T15:03:29.435Z',
    image: {
      alt: 'Avatar de Sebastian',
      value: 'https://avatars3.githubusercontent.com/u/17608169?s=460&v=4',
    },
    name: 'Sebastian'};

  @ContentChild('imageExtraTemplate', { static: false })
  public imageExtraTemplate!: TemplateRef<any>;

  @ContentChild('nameExtraTemplate', { static: false })
  public nameExtraTemplate!: TemplateRef<any>;

  @ContentChild('dateExtraTemplate', { static: false })
  public dateExtraTemplate!: TemplateRef<any>;

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.changes) {
      this.changes = new BehaviorSubject(changes);
    }
    this.changes.next(changes);
  }

  public ngAfterViewInit(): void {
    this.changes.subscribe((changes: SimpleChanges) => {
      this.validateAvatarData(changes.data.currentValue as AvatarData);
    });
  }

  public validateAvatarData(value: AvatarData) {
    const validations = [];

    if (!this.imageExtraTemplate) {
      validations.push({
        name: 'image',
        type: 'object',
      });
    }

    if (!this.nameExtraTemplate) {
      validations.push({
        name: 'name',
        type: 'string',
      });
    }

    if (!this.dateExtraTemplate) {
      validations.push({
        name: 'date',
        type: 'string',
      });
    }
    const validation = isAvatarData(value, validations);

    this.errors = !validation.valid ? validation : undefined;
  }
}
