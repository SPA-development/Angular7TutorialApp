import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FailureComponent } from './earlierWork/alerts/failure-alert.component';
import { SuccessComponent } from './earlierWork/alerts/success-alert.component';
import { WarningComponent } from './earlierWork/alerts/warning-alert.component';
import { BindingExamplesComponent } from './earlierWork/binding-examples/binding-examples.component';
import { ToggleComponent } from './earlierWork/toggle/toggle.component';
import { AlertContainerComponent } from './earlierWork/alert-container/alert-container.component';
import { HeaderComponent } from './udemy-project-one/header/header.component';
import { ShoppingListComponent } from './udemy-project-one/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './udemy-project-one/recipe-book/recipe-book.component';
import { ShoppingListItemComponent } from './udemy-project-one/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './udemy-project-one/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './udemy-project-one/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './udemy-project-one/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './udemy-project-one/recipe-book/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FailureComponent,
    SuccessComponent,
    WarningComponent,
    BindingExamplesComponent,
    ToggleComponent,
    AlertContainerComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListItemComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
