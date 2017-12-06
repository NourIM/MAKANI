import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './navbar/navbar.module';
import { EventsModule } from './events/events.module';
import { HeaderModule } from './header/header.module';
import { MemebershipsModule } from './memberships/memberships.module';
import { DealsModule } from './deals/deals.module';
import { SwiperModule } from 'angular2-useful-swiper';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    HeaderModule,
    NavbarModule,
    EventsModule,
    MemebershipsModule,
    DealsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
