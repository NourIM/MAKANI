
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsComponent } from './deals.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [ DealsComponent ],
  exports: [ DealsComponent ],
  providers: [ ]
})
export class DealsModule { }
