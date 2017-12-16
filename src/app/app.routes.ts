import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MemebershipsComponent } from './memberships/memberships.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const ROUTES: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: 'homepage', component: HomepageComponent, data: { title: 'Homepage' } },
    { path: 'memberships', component: MemebershipsComponent, data: { title: 'Memberships' }, children: [
      { path: ':event', component: MemebershipsComponent }]
    },
    { path: '**', component: HomepageComponent },
    { path: '', component: HomepageComponent }
  ]}
];
