import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentLoaderModule } from '@vitaba/content-loader';
import { AvatarItemLoaderComponent } from './avatar-item-loader/avatar-item-loader.component';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { InputControlComponent } from './input-control/input-control.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { ResponsiveHeaderComponent } from './responsive-header/responsive-header.component';
@NgModule({
  declarations: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
    InputControlComponent,
    InputLabelComponent,
    ResponsiveHeaderComponent,
  ],
  exports: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
    InputControlComponent,
    InputLabelComponent,
    ResponsiveHeaderComponent,
  ],
  imports: [CommonModule, ContentLoaderModule, ReactiveFormsModule],
})
export class CommonUiModule {}
