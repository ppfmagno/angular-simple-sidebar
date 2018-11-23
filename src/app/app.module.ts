import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootContainerComponent } from './components/root-container/root-container.component';
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarTogglerComponent } from './components/sidebar-toggler/sidebar-toggler.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidebarMenuItemComponent } from './components/sidebar-menu-item/sidebar-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RootContainerComponent,
    SidebarContainerComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarTogglerComponent,
    MainContentComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
