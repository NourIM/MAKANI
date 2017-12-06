import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  providers: [ ]
})
export class NavbarModule { }
