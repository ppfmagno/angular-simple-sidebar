import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TogglerService } from '../../services/toggler.service';

@Component({
  selector: 'ppm-sidebar-toggler',
  templateUrl: './sidebar-toggler.component.html',
  styles: []
})
export class SidebarTogglerComponent implements OnInit {
  toggleBetweenDefault = 'open cozy';

  @Input() toggleBetween: string;

  constructor(private togglerService: TogglerService) { }

  ngOnInit() {
  }

  @HostListener('click')
  toggle() {
    const between = this.toggleBetween || this.toggleBetweenDefault;
    this.togglerService.toggle(between);
  }

}
