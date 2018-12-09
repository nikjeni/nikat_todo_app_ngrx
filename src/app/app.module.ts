import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todos } from '../app/redux/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ todos }), StoreDevtoolsModule.instrument({
    maxAge: 25
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
