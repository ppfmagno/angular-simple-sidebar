import { EventEmitter, Injectable, Output } from '@angular/core';
import { SidebarToggler } from '../models/sidebar-toggler';
import { SidebarConfig } from '../models/sidebar-config';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {
  toggler;

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor(private config: SidebarConfig) {
    this.toggler = new SidebarToggler(this.config.initialState);
  }

  toggle(between) {
    this.toggler.toggle(between);
    this.change.emit(this.toggler.currentState);
  }

}
