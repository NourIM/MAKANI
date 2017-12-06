import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [ EventsComponent ],
  exports: [ EventsComponent ],
  providers: [ ]
})
export class EventsModule { }
