import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Items as Item } from '@vitaba/common-utils';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-card-list',
  styleUrls: ['./card-list.component.scss'],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input() public title = 'Card List Example';
  @Input() public styles = {
    items: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded',
    title: 'font-sans text-lg text-gray-800 text-center mb-3',
  };
  @Input()
  public items: Item[] = [
    {
      name: 'Item 1',
      value: 1,
    },
    {
      name: 'Item 2',
      value: 2,
    },
  ];

  public trackByFn(option: Item) {
    return option.value;
  }
}
