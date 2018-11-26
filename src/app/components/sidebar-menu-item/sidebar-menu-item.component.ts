import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'ppm-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styles: []
})
export class SidebarMenuItemComponent implements OnInit {
  hasIcon: any = false;
  isCurrentRoute: boolean;
  currentRoute: string;

  constructor(private router: Router) { }

  @Input() menuItem: MenuItem;

  ngOnInit() {
    this.menuItem.isActive = false;
    this.hasIcon = this.menuItem.icon;
  }

  toggleActive(menuItem: MenuItem) {
    menuItem.isActive = !menuItem.isActive;
    if (!menuItem.isActive && menuItem.childrenMenus) {
      for (const child of menuItem.childrenMenus) {
        child.isActive = false;
      }
    }
  }

}
