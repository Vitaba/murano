import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@vitaba/content-loader';
import { AvatarItemLoaderComponent } from './avatar-item-loader/avatar-item-loader.component';
import { AvatarItemComponent } from './avatar-item/avatar-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
@NgModule({
  declarations: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
  ],
  exports: [
    CardListComponent,
    AvatarItemComponent,
    AvatarItemLoaderComponent,
    HeaderTitleComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
})
export class CommonUiModule {}
