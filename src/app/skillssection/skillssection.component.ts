import { afterNextRender, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SkillboxComponent } from '../skillbox/skillbox.component';

@Component({
  selector: 'app-skillssection',
  imports: [SkillboxComponent],
  templateUrl: './skillssection.component.html',
  styleUrl: './skillssection.component.scss'
})
export class SkillssectionComponent {
  skillList = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Rest-API',
    'Firebase',
    'GIT',
    'NodeJS',
    'SCRUM',
    'Material-Design',
  ]

  constructor() {
    afterNextRender(() => {
      this.initObserver();
    });
  }

  @ViewChildren(SkillboxComponent, { read: ElementRef }) skillBoxes!: QueryList<ElementRef>;
  @ViewChild("skillbox", { read: ElementRef }) skillbox!: ElementRef;

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
      }
    });
  }, { threshold: 1 });

  private initObserver() {
    this.skillBoxes.forEach((element, index) => {
      const skillBox = element.nativeElement;
      skillBox.style.transitionDelay = `${index * 0.04}s`;
      this.observer.observe(skillBox);
    });
    if (this.skillbox) {
      this.observer.observe(this.skillbox.nativeElement);
    }
  }
}
