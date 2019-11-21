import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardListComponent],
  exports: [CardListComponent],
  imports: [CommonModule],
})
export class CommonUiModule {}
