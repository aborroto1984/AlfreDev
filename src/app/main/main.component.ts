import { Component, OnInit} from '@angular/core';
import { timer } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';
import { ProjectInterface} from "../main-interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),

      ]),
    ]),
  ],
})
export class MainComponent implements OnInit{
  projects: ProjectInterface[]=[
    {name: 'Black Jack',
    imgPath: 'assets/BlackJack-topaz.png',
    description: 'Black Jack was a project developed in Visual Studios using C#. It is a console application where you can play the blackjack game against the computer using a simple betting system where you start the game with $2000 and place bets before the game starts. While writing this project, I used Object Oriented Programming to write the Hand, Card, Deck, and Game classes. The factory design pattern is also applied to construct the card objects.',
    videoPath: 'https://www.youtube.com/watch?v=kvDmKG8-GCo&t=5s',
    githubPath: 'https://github.com/aborroto1984/Blackjack',
    downLoadPath: ''
    },
    {name: 'Calc+',
      imgPath: 'assets/Calc +-topaz.png',
      description: 'Calc+ is a fractions calculator built for IOS. I designed this calculator to fill a gap between a standard and a scientific calculator. The app was written in Xcode using the SwiftUI toolkit. I made the prototype using Adobe Xd. The app has a dark mode and a very easy-to-use interface.',
      videoPath: 'https://www.youtube.com/watch?v=vFBBwGt6lcw',
      githubPath: 'https://github.com/aborroto1984/Calc-Final',
      downLoadPath: ''
    },
    {name: 'Know Wealth',
      imgPath: 'assets/KnowWealth-topaz.png',
      description: 'Know Wealth is a budgeting Android app developed in Android Studio using Java. Know Wealth is a team project where I worked as the lead front-end developer and UI/UX designer. We had weekly sprints and used a Trello board to practice the Kanban methodology. I developed ninety percent of the app views.',
      videoPath: 'https://www.youtube.com/watch?v=ysFTB1MTlWY',
      githubPath: 'https://github.com/aborroto1984/Know-Wealth',
      downLoadPath: ''
    },
    {name: 'Client-Server Project',
      imgPath: 'assets/ClientServer.png',
      description: 'The Client-Server project is a simple console application where up to four clients connect to the server, transmitting the port information over a UDP protocol. Once the client gets the port number, it creates a TCP link to the server to commence chatting with the other clients. The chat is only visible on the server app, but through the use of commands, the client can download a transcript of the chat, view who is connected, and exit the chat. I used C++ and Visual Studio to write this project and the Windows Socket API to make the TCP and UDP connections.',
      videoPath: 'https://youtu.be/VKJ0gVa_FIM',
      githubPath: 'https://github.com/aborroto1984/Client---Server-Project',
      downLoadPath: ''
    }
  ]

  isStatic = false
  projectsVisible = false;

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
