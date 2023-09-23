import {Component, Input} from '@angular/core';
import { ProjectInterface} from "../main-interface";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
@Input() projects: ProjectInterface[] = [];
}
