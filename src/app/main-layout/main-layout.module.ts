import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { SidebarModule } from './../sidebar/sidebar.module';
import { NavbarModule } from './../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    NavbarModule
  ],
  declarations: [
    MainLayoutComponent,
   ],
  exports:      [ MainLayoutComponent ],
  providers:    [ ]
})
export class MainLayoutModule { }
