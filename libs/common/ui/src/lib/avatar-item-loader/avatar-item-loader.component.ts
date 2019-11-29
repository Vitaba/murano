import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-avatar-item-loader',
  styleUrls: ['./avatar-item-loader.component.scss'],
  templateUrl: './avatar-item-loader.component.html',
})
export class AvatarItemLoaderComponent implements OnChanges {
  @Input() public width;
  @Input() public height;

  public constructor(
    private readonly _changeDetectionRef: ChangeDetectorRef,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    const currentValue =
    changes.data.currentValue as { height: number; width: number };

    this.width = currentValue.width;
    this.height = currentValue.height;
    this._changeDetectionRef.detectChanges();
  }
}
