import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(50px)'}),
        animate('500ms', style({opacity: 1, transform: 'translateX(0)'})),
      ]), transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateX(50px)'})),
      ]),
    ]),
  ]
})
export class ProjectViewComponent {
  @Input() name = '';
  @Input() description = ''
  @Input() imagePath = '';
  @Input() videoPath = '';
  @Input() downLoadPath = '';
  @Input() githubPath = ''
  isOpen = false;

  openPanels() {
    this.isOpen = !this.isOpen;
  }

}
