import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'ppm-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styles: []
})
export class SidebarMenuItemComponent implements OnInit {

  constructor() { }

  @Input() menuItem: MenuItem;

  ngOnInit() {
    this.menuItem.isActive = false;
  }

}
