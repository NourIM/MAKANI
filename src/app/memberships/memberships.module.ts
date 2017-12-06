import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemebershipsComponent } from './memberships.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [ MemebershipsComponent ],
  exports: [ MemebershipsComponent ],
  providers: [ ]
})
export class MemebershipsModule { }
