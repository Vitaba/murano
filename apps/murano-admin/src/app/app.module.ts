import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@vitaba/common-ui';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppModule {}
