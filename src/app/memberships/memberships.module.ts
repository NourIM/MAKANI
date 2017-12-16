import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemebershipsComponent } from './memberships.component';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { KeysPipe } from './../pipes/keys.pipe';
import { MemebershipCardsModule } from './../membership-cards/membership-cards.module';

@NgModule({
  imports: [
    CommonModule,
    MemebershipCardsModule
  ],
  declarations: [
	  MemebershipsComponent,
	  CapitalizePipe,
	  KeysPipe
  ],
  exports: [ MemebershipsComponent ],
  providers: [ ]
})
export class MemebershipsModule { }
