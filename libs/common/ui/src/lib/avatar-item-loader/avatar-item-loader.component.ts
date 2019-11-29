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
  @Input() public speed = 2;
  @Input() public colors = {
    primary: '#f4f4f4',
    secondary: '#ecebeb',
  };

  public constructor(
    private readonly _changeDetectionRef: ChangeDetectorRef,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    const currentValue =
    changes.data.currentValue as {
      height: number;
      width: number;
      colors: {primary: string; secondary: string };
      speed: number;
    };

    this.width = currentValue.width;
    this.height = currentValue.height;
    this.speed = currentValue.speed;
    this.colors = currentValue.colors;
    this._changeDetectionRef.detectChanges();
  }
}
