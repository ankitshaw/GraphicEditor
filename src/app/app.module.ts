import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import KonvaModule
import { KonvaModule } from "ng2-konva";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KonvaModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }