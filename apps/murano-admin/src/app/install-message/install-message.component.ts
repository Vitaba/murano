import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { OverlayAppRef, OverlayData } from '@vitaba/overlay-utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-install-message',
  styleUrls: ['./install-message.component.scss'],
  templateUrl: './install-message.component.html',
})
export class InstallMessageComponent {
  public constructor(
    public readonly data: OverlayData,
    public readonly ref: OverlayAppRef<OverlayRef>,
  ) {}

  public close() {
    this.ref.close({ name: 'Sebas' });
  }
}
