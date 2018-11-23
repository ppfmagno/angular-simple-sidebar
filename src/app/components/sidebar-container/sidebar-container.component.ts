import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ppm-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {

  constructor() { }

  @Input() height: string;

  ngOnInit() {
  }

}
