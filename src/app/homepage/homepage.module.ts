import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';

import { DealsModule } from './../deals/deals.module';
import { EventsModule } from './../events/events.module';
import { HeaderModule } from './../header/header.module';
import { MemebershipCardsModule } from './../membership-cards/membership-cards.module';
@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    EventsModule,
    MemebershipCardsModule,
    DealsModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [ HomepageComponent ],
  exports: [ HomepageComponent ],
  providers: [ ]
})
export class HomepageModule { }
