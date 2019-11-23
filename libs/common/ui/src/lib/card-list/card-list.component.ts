import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Items } from '@vitaba/common-utils';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-card-list',
  styleUrls: ['./card-list.component.scss'],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public items: Items[] = [
    {
      name: 'Item 1',
      value: 1,
    },
    {
      name: 'Item 2',
      value: 2,
    },
  ];
}
