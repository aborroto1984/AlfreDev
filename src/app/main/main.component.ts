import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit{
  isStatic = false
  projectsVisible = false;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    // Create a timer that emits a value after 10 seconds
    const timer$ = timer(10000); // 10000 milliseconds = 10 seconds

    // Subscribe to the timer
    timer$.subscribe(() => {
      // This code will be executed after 10 seconds
      this.isStatic = true;
    });
  }

  projectIsVisible(){
    this.projectsVisible = true
  }
  projectIsNotVisible(){
    this.projectsVisible = false
  }

}
