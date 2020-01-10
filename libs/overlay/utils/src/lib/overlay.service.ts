import {
    GlobalPositionStrategy,
    Overlay,
    OverlayConfig,
    OverlayPositionBuilder,
    OverlayRef,
  } from '@angular/cdk/overlay';
import {
    ComponentPortal,
    ComponentType,
    PortalInjector,
  } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import {
    OverlayAppConfig,
    OverlayAppPosition,
    OverlayAppRef,
    OverlayAppScroll,
    OverlayData,
  } from './overlay.model';

@Injectable()
  export class OverlayService {
  public constructor(
    private readonly _overlay: Overlay,
    private readonly _parentInjector: Injector,
  ) {}
  public open<C, T>(metadata: {
    component: ComponentType<C>;
    data: T;
    options: OverlayAppConfig;
  }): OverlayAppRef<OverlayRef> {
    const parsedOptions: OverlayConfig = {
      ...metadata.options,
      positionStrategy: this._getPosition(metadata.options.positionStrategy),
      scrollStrategy: this._getScroll(metadata.options.scrollStrategy),
    };

    const overlayRef: OverlayRef = this._overlay.create(parsedOptions);

    const dialogRef = new OverlayAppRef<OverlayRef>(
        overlayRef,
        metadata.options.canClose,
      );

    const injector = this._getInjector(
        metadata.data,
        dialogRef,
        this._parentInjector,
      );

    const toastPortal = new ComponentPortal(
        metadata.component,
        undefined,
        injector,
      );

    overlayRef.attach(toastPortal);

    return dialogRef;
  }

  private _getPosition(positionStrategyOpt: OverlayAppPosition) {
    const positionBuilder: OverlayPositionBuilder = this._overlay.position();
    let positionStrategy: GlobalPositionStrategy;

    if (positionStrategyOpt.builder === 'global') {
      positionStrategy = positionBuilder.global();

      if (positionStrategyOpt.value.centerVertically) {
        positionStrategy = positionStrategy.centerVertically();
      }
      if (positionStrategyOpt.value.centerHorizontally) {
        positionStrategy = positionStrategy.centerHorizontally();
      }

      if (positionStrategyOpt.value.top) {
        positionStrategy = positionStrategy.top(positionStrategyOpt.value.top);
      }

      if (positionStrategyOpt.value.bottom) {
        positionStrategy = positionStrategy.top(
            positionStrategyOpt.value.bottom,
          );
      }

      if (positionStrategyOpt.value.left) {
        positionStrategy = positionStrategy.top(positionStrategyOpt.value.left);
      }

      if (positionStrategyOpt.value.right) {
        positionStrategy = positionStrategy.top(
            positionStrategyOpt.value.right,
          );
      }

      return positionStrategy;
    }
  }

  private _getScroll(scrollStrategyOpt: OverlayAppScroll) {
    switch (scrollStrategyOpt) {
      case 'Noop': {
        return this._overlay.scrollStrategies.noop();
      }
      case 'Block': {
        return this._overlay.scrollStrategies.block();
      }
      case 'Close': {
        return this._overlay.scrollStrategies.close();
      }
      case 'Reposition': {
        return this._overlay.scrollStrategies.reposition();
      }
    }
  }

  private _getInjector<T>(
    data: T,
    overlayRef: OverlayAppRef<OverlayRef>,
    parentInjector: Injector,
  ) {
    const tokens = new WeakMap();

    tokens.set(OverlayData, data);
    tokens.set(OverlayAppRef, overlayRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
