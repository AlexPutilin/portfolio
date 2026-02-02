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
      github: "https://github.com/AlexPutilin/PokeIndex",
      live: "http://pokeindex.alexander-putilin.de",
    },
    {
      name: "Join",
      description: 'PORTFOLIO.PROJECT.INFO_PROJECT_2',
      imgUrl: "./imgs/join.jpg",
      techs: ['JavaScript','HTML','CSS','Firebase'],
      github: "https://github.com/AlexPutilin/Join",
      live: "http://join.alexander-putilin.de/",
    },
    {
      name: "Sharkie",
      description: 'PORTFOLIO.PROJECT.INFO_PROJECT_3',
      imgUrl: "./imgs/sharkie.jpg",
      techs: ['JavaScript','HTML','CSS'],
      github: "https://github.com/AlexPutilin/Sharkie",
      live: "http://sharkie.alexander-putilin.de",
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
