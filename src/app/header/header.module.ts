import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: [ ]
})
export class HeaderModule { }
