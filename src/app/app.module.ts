import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SidebarModule } from './modules/sidebar.module';
import { SidebarConfig } from './models/sidebar-config';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  { path: 'daterra', component: TestOneComponent },
  { path: 'doce', component: TestTwoComponent },
  { path: '**', component: TestOneComponent }
];

@NgModule({
  declarations: [ AppComponent, TestOneComponent, TestTwoComponent ],
  imports: [
    BrowserModule,
    SidebarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SidebarModule, SidebarConfig ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
