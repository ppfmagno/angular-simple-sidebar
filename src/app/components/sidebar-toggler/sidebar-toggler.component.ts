import { Component, OnInit, HostListener } from '@angular/core';
import { TogglerService } from '../../service/toggler.service';

@Component({
  selector: 'ppm-sidebar-toggler',
  templateUrl: './sidebar-toggler.component.html',
  styles: []
})
export class SidebarTogglerComponent implements OnInit {

  constructor(private togglerService: TogglerService) { }

  ngOnInit() {
  }

  @HostListener('click')
  toggle() {
    this.togglerService.toggle();
    console.log(this.togglerService.isOpen);
  }

}
