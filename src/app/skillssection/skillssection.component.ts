import { afterNextRender, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { SkillboxComponent } from './skillbox/skillbox.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skillssection',
  imports: [SkillboxComponent, ButtonComponent, TranslateModule],
  templateUrl: './skillssection.component.html',
  styleUrl: './skillssection.component.scss',
  standalone: true
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


  // constructor() {
  //   afterNextRender(() => {
  //     this.initObserver();
  //   });
  // }

  @ViewChild("skillbox", { read: ElementRef}) skillbox!: ElementRef;
  @ViewChildren(SkillboxComponent, { read: ElementRef }) skillBoxes!: QueryList<ElementRef>;

  private observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
      }
    });
  }, { threshold: 1 });

  // private initObserver() {
  //   this.skillBoxes.forEach((element, index) => {
  //     const skillBox = element.nativeElement;
  //     skillBox.style.transitionDelay = `${index * 0.04}s`;
  //     this.observer.observe(skillBox);
  //   });
  //   if (this.skillbox) {
  //     this.observer.observe(this.skillbox.nativeElement);
  //   }
  // }

  ngAfterViewInit() {
    this.skillBoxes.forEach((element, index) => {
      const skillBox = element.nativeElement;
      skillBox.style.transitionDelay = `${index * 0.04}s`;
      this.observer.observe(skillBox);
    });
    this.observer.observe(this.skillbox.nativeElement);
  }
}
