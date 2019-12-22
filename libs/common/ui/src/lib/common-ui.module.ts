import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@vitaba/content-loader';
import { AvatarItemLoaderComponent } from './avatar-item-loader/avatar-item-loader.component';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { InputControlComponent } from './input-control/input-control.component';
import { InputLabelComponent } from './input-label/input-label.component';
@NgModule({
  declarations: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
    InputControlComponent,
    InputLabelComponent,
  ],
  exports: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
    InputControlComponent,
    InputLabelComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
})
export class CommonUiModule {}
