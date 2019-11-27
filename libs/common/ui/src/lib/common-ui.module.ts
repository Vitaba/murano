import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardListComponent, AvatarItemComponent],
  exports: [CardListComponent, AvatarItemComponent],
  imports: [CommonModule],
})
export class CommonUiModule {}
