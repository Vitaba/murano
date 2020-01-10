// tslint:disable:max-classes-per-file ter-max-len

import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

// tslint:disable-next-line:no-unused
export class OverlayAppRef<T> {
  public get afterClosed() {
    return this._afterClosed1.asObservable();
  }

  public constructor(
    private readonly _overlay: OverlayRef,
    private readonly _canClose: boolean = true,
  ) {
    this._overlay.backdropClick().subscribe(() => {
      if (this._canClose) {
        this._afterClosed1.next();
        this._afterClosed1.complete();
        this._overlay.dispose();
      }
    });
  }

  public close<D>(data?: D): void {
    this._afterClosed1.next(data);
    this._overlay.dispose();
  }

  public isVisible() {
    return this._overlay && this._overlay.overlayElement;
  }

  public getPosition() {
    return this._overlay.overlayElement.getBoundingClientRect();
  }
  // tslint:disable-next-line: no-any
  private readonly _afterClosed1: Subject<any> = new Subject();
}

export class OverlayData {
  public text?: string;
}

export class OverlayAppConfig {
  /** Strategy with which to position the overlay. */
  public positionStrategy!: OverlayAppPosition;
  public scrollStrategy!: OverlayAppScroll;
  /** Custom class to add to the overlay pane. */
  public panelClass?: string | string[];
  /** Whether the overlay has a backdrop. */
  public hasBackdrop?: boolean;
  /** Custom class to add to the backdrop */
  public backdropClass?: string | string[];
  /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
  public width?: number | string;
  /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
  public height?: number | string;
  /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
  public minWidth?: number | string;
  /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
  public minHeight?: number | string;
  /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
  public maxWidth?: number | string;
  /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
  public maxHeight?: number | string;
  /** User can close if click on the backdrop */
  public canClose = true;
}

export class OverlayAppPosition {
  public builder = 'global';
  public value!: {
    centerVertically?: boolean;
    centerHorizontally?: boolean;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export type OverlayAppScroll = 'Noop' | 'Close' | 'Block' | 'Reposition';
