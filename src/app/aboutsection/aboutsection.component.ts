import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aboutsection',
  imports: [],
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.scss',
  standalone: true
})
export class AboutsectionComponent {
  constructor() {
    afterNextRender(() => {
      this.initObserver();
    });
  }

  @ViewChild("profile", { read: ElementRef }) profileDiv!: ElementRef;
  @ViewChild("aboutMe", { read: ElementRef }) aboutMeDiv!: ElementRef;

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
      }
    });
  }, { threshold: 0.4 });

  private initObserver() {
    if (this.aboutMeDiv) {
      this.observer.observe(this.aboutMeDiv.nativeElement);
    }
    if (this.profileDiv) {
      this.observer.observe(this.profileDiv.nativeElement);
    }
  }
}
