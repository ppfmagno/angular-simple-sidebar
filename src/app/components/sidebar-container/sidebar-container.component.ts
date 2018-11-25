import { Component, OnInit } from '@angular/core';
import { TogglerService } from '../../services/toggler.service';
import { SidebarConfig } from '../../models/sidebar-config';

@Component({
  selector: 'ppm-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {
  sidebarState: string;

  constructor(private togglerService: TogglerService, private config: SidebarConfig) {
    this.sidebarState = `sidebar-${this.config.initialState}`;
  }

  ngOnInit() {
    this.togglerService.change.subscribe(sidebarState => {
      this.sidebarState = `sidebar-${sidebarState}`;
    });
  }

}
