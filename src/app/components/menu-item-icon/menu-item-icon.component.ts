import { Component, OnInit, Input } from '@angular/core';
import { SidebarConfig } from '../../models/sidebar-config';

@Component({
  selector: 'ppm-menu-item-icon',
  templateUrl: './menu-item-icon.component.html',
  styles: []
})
export class MenuItemIconComponent implements OnInit {
  iconFont;
  isFontAwesome;

  @Input() icon;

  constructor(private config: SidebarConfig) {
    this.iconFont = this.config.iconFont;
    this.setIconFont();
  }

  ngOnInit() {
  }

  setIconFont() {
    if (this.iconFont === 'fontawesome') {
      this.isFontAwesome = true;
    }
  }

}
