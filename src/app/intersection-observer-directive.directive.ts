import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective {
  private observer: IntersectionObserver;
  @Output() elementVisible: EventEmitter<void> = new EventEmitter();
  @Output() elementNotVisible: EventEmitter<void> = new EventEmitter();

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is now in the viewport
          this.onElementVisible();
        }
      });
    });
  }

  ngAfterViewInit() {
    this.observer.observe(this.el.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Check element visibility while scrolling
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      this.onElementVisible();
    }else{
      this.onElementNotVisible();
    }
  }

  private onElementVisible() {
    this.elementVisible.emit();
  }
  private onElementNotVisible() {
    this.elementNotVisible.emit();
  }
}

export class IntersectionObserverDirectiveDirective {
}
