import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'ppm-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styles: []
})
export class SidebarMenuItemComponent implements OnInit {
  hasIcon: any = false;

  constructor() { }

  @Input() menuItem: MenuItem;

  ngOnInit() {
    this.menuItem.isActive = false;
    this.hasIcon = this.menuItem.icon;
  }

  toggleChildren(menuItem: MenuItem) {
    menuItem.isActive = !menuItem.isActive;
    if (!menuItem.isActive && menuItem.childrenMenus) {
      for (const child of menuItem.childrenMenus) {
        child.isActive = false;
      }
    }
  }

}
