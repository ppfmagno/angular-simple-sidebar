import { Component, ElementRef, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'ppm-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss']
})
export class RootContainerComponent implements OnInit {
  sidebarContainerHeight;

  @ContentChild('ppmRootHeader') header: ElementRef;
  @ContentChild('ppmRootFooter') footer: ElementRef;

  constructor() { }

  ngOnInit() {
    // needs a better way of geting this height; should be dinamic
    const headerHeight = this.header.nativeElement.offsetHeight,
      footerHeight = this.footer.nativeElement.offsetHeight;
      this.sidebarContainerHeight = `calc(100% - ${headerHeight + footerHeight}px)`;
  }

}
