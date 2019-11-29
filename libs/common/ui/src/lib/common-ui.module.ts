import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { AvatarItemLoaderComponent } from './avatar-item-loader/avatar-item-loader.component';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
  ],
  exports: [CardListComponent, AvatarItemComponent, AvatarItemLoaderComponent],
  imports: [CommonModule, NgxContentLoadingModule],
})
export class CommonUiModule {}
