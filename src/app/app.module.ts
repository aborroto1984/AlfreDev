import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmallHeaderComponent } from './small-header/small-header.component';
import { IntersectionObserverDirective } from './intersection-observer-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SmallHeaderComponent,
    IntersectionObserverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
