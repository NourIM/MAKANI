import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemebershipCardsComponent } from './membership-cards.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [ MemebershipCardsComponent ],
  exports: [ MemebershipCardsComponent ],
  providers: [ ]
})
export class MemebershipCardsModule { }
