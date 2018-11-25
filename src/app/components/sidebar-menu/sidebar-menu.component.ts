import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { MENUITEMS } from '../../mock/mock-menu-items';

@Component({
  selector: 'ppm-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styles: []
})
export class SidebarMenuComponent implements OnInit {
  menuItems: MenuItem[]; // change later

  constructor() { }

  @Input() menusFromParent: MenuItem[];

  ngOnInit() {
    this.menuItems = this.menusFromParent || MENUITEMS;
  }

}
