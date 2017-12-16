import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ],
  providers: [ ]
})
export class SidebarModule { }
