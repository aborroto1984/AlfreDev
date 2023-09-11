import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fade', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('hide => show', animate('500ms ease-in')),
      transition('show => hide', animate('500ms ease-out')),
    ]),],
})
export class MainComponent implements OnInit{
  isStatic = false
  constructor() {}

  ngOnInit() {
    // Create a timer that emits a value after 10 seconds
    const timer$ = timer(10000); // 10000 milliseconds = 10 seconds

    // Subscribe to the timer
    timer$.subscribe(() => {
      // This code will be executed after 10 seconds
      this.isStatic = true;
    });
  }
}
