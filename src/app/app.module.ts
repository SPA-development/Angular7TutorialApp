import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FailureComponent } from './alerts/failure-alert.component';
import { SuccessComponent } from './alerts/success-alert.component';
import { WarningComponent } from './alerts/warning-alert.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AlertContainerComponent } from './alert-container/alert-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FailureComponent,
    SuccessComponent,
    WarningComponent,
    BindingExamplesComponent,
    ToggleComponent,
    AlertContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
