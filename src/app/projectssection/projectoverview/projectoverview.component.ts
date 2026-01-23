import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../ui/buttons/button/button.component';

@Component({
  selector: 'app-projectoverview',
  imports: [ButtonComponent],
  templateUrl: './projectoverview.component.html',
  styleUrl: './projectoverview.component.scss'
})
export class ProjectoverviewComponent {
  @Input() projectIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  projects = [
    {
      name: "Pokedex",
      description: "This Pokedex-App uses the Pokemon REST-API to access and display the entire Pokemon database.",
      imgUrl: "./imgs/pokedex.jpg",
      techs: ['JavaScript','HTML','CSS','Rest-API'],
      github: "https://github.com/AlexPutilin/Pokedex",
      live: "https://alexander-putilin.developerakademie.net/modul9/pokedex/html/index.html",
    },
    {
      name: "Join",
      description: "Task manager tool inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories",
      imgUrl: "./imgs/join.jpg",
      techs: ['JavaScript','HTML','CSS','Firebase'],
      github: "https://github.com/AlexPutilin/Join",
      live: "https://join-459.developerakademie.net/join/index.html",
    },
    {
      name: "Sharkie",
      description: "Side-Scroller game based on object-oriented approach. Help Sharkie to collect coins and potions to fight against different underwater animals.",
      imgUrl: "./imgs/sharkie.jpg",
      techs: ['JavaScript','HTML','CSS'],
      github: "https://github.com/AlexPutilin/Sharkie",
      live: "https://alexander-putilin.developerakademie.net/sharkie/index.html",
    },
  ];

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  closeModal() {
    this.close.emit();
  }
}
