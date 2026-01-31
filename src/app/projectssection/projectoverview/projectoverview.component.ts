import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../ui/buttons/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projectoverview',
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './projectoverview.component.html',
  styleUrl: './projectoverview.component.scss',
  standalone: true
})
export class ProjectoverviewComponent {
  @Input() projectIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  projects = [
    {
      name: "Pokedex",
      description: 'PORTFOLIO.PROJECT.INFO_PROJECT_1',
      imgUrl: "./imgs/pokedex.jpg",
      techs: ['JavaScript','HTML','CSS','Rest-API'],
      github: "https://github.com/AlexPutilin/Pokedex",
      live: "https://alexander-putilin.developerakademie.net/modul9/pokedex/html/index.html",
    },
    {
      name: "Join",
      description: 'PORTFOLIO.PROJECT.INFO_PROJECT_2',
      imgUrl: "./imgs/join.jpg",
      techs: ['JavaScript','HTML','CSS','Firebase'],
      github: "https://github.com/AlexPutilin/Join",
      live: "https://join-459.developerakademie.net/join/index.html",
    },
    {
      name: "Sharkie",
      description: 'PORTFOLIO.PROJECT.INFO_PROJECT_3',
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
