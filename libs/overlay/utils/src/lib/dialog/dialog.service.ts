import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators';
import { OverlayAppConfig, OverlayAppRef } from '../overlay.model';
import { OverlayService } from '../overlay.service';
import { DialogData } from './dialog.model';

@Injectable()
export class DialogService {
  public get lastDialogRef() {
    return this._lastDialogRef;
  }
  public constructor(
    private readonly _overlayService: OverlayService,
  ) {}
  public open<C>(metadata: {
    component: ComponentType<C>;
    data: DialogData;
    options: OverlayAppConfig;
  }) {
    try {
      this._lastDialogRef = this._overlayService.open(metadata);
      this._listenClose();

      return this.lastDialogRef;
    } catch (e) {
      console.error(e);
    }
  }

  // tslint:disable-next-line:no-any
  private _lastDialogRef!: OverlayAppRef<any>;

  private _listenClose<T>() {
    this.lastDialogRef.afterClosed.pipe(take(1)).subscribe((_data: T) => {
      // console.warn('dialog closed', data);
    });
  }
}
