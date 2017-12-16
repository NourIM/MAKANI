import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MemebershipsModule } from './memberships/memberships.module';
import { HomepageModule } from './homepage/homepage.module';
import { SwiperModule } from 'angular2-useful-swiper';
import { MainLayoutModule } from './main-layout/main-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    SwiperModule,
    RouterModule,
    MemebershipsModule,
    HomepageModule,
    MainLayoutModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
