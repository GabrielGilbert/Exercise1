import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Exercise1Component } from './exercise1.component';

@NgModule({
  declarations: [
    Exercise1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Exercise1Component]
})
export class AppModule { }
