import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { OverlayService } from './overlay.service';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  providers: [
    OverlayService,
    DialogService,
  ],
})
export class OverlayUtilsModule {}
