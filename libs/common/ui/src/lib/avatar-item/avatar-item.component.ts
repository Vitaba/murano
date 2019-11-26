import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
interface AvatarConfig {
  dateFormat?: string;
}

interface AvatarData {
  name: string;
  image: {
    value: string;
    alt: string;
  };
  date?: string;
  dateFormat?: string;
}

interface AvatarStyles {
  container: string;
  image: string;
  dataContainer: string;
  name: string;
  date: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-avatar-item',
  styleUrls: ['./avatar-item.component.scss'],
  templateUrl: './avatar-item.component.html',
})

export class AvatarItemComponent {
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
  // tslint:disable-next-line: no-any
  public imageExtraTemplate!: TemplateRef<any>;

  @ContentChild('nameExtraTemplate', { static: false })
  // tslint:disable-next-line: no-any
  public nameExtraTemplate!: TemplateRef<any>;

  @ContentChild('dateExtraTemplate', { static: false })
  // tslint:disable-next-line: no-any
  public dateExtraTemplate!: TemplateRef<any>;
}
