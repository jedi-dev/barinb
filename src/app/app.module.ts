import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLocaleModule } from './app-locale.module';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '@app/ui/icons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AppLocaleModule, HttpClientModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
