import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@vitaba/common-ui';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { OverlayUtilsModule } from '@vitaba/overlay-utils';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InstallMessageComponent } from './install-message/install-message.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, InstallMessageComponent],
  entryComponents: [InstallMessageComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    ReactiveFormsModule,
    OverlayUtilsModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
})
export class AppModule {}
