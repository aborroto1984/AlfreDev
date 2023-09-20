import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateX(50px)' })),
      ]),
    ]),
  ],
})
export class ProjectViewComponent {
name = 'Black Jack';
description ='Black Jack was a project developed in Visual Studios using C#. It is a console application where you can play the blackjack game against the computer using a simple betting system where you start the game with $2000 and place bets before the game starts. While writing this project, I used Object Oriented Programming to write the Hand, Card, Deck, and Game classes. The factory design pattern is also applied to construct the card objects.';
imagePath = 'assets/BlackJack-topaz.png';
videoPath = '';
codePath = '';
exePath = ''
isOpen = false;

openPanels(){
  this.isOpen = !this.isOpen;
}

}
