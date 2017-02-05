import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[refFilDropdow]'
})
export class DropdowDirective {
  private isOpen = false;

  @HostBinding('class.open')
  public get opened() {
    return this.isOpen;
  }

  @HostListener('click')
  public open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  public close() {
    this.isOpen = false;
  }
}
