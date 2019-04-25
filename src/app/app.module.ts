import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './alerts/success-alert.component';
import { WarningComponent } from './alerts/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
