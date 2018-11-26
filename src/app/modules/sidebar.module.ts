import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  RootContainerComponent,
  SidebarContainerComponent,
  SidebarComponent,
  SidebarMenuComponent,
  SidebarTogglerComponent,
  MainContentComponent,
  SidebarMenuItemComponent,
  MenuItemIconComponent
} from '../components';

@NgModule({
  declarations: [
    RootContainerComponent,
    SidebarContainerComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarTogglerComponent,
    MainContentComponent,
    SidebarMenuItemComponent,
    MenuItemIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    RootContainerComponent,
    SidebarContainerComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarTogglerComponent,
    MainContentComponent,
    SidebarMenuItemComponent,
    MenuItemIconComponent
  ]
})
export class SidebarModule { }
