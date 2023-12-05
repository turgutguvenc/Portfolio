// dynamic-tooltip.directive.ts

import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDynamicTooltip]',
})
export class DynamicTooltipDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setTooltipWidth();
  }

  private setTooltipWidth(): void {
    const parentWidth = this.el.nativeElement.clientWidth;
    this.renderer.setStyle(this.el.nativeElement, 'width', `${parentWidth}px`);
  }
}
