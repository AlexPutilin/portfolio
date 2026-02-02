import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutsection',
  imports: [TranslateModule],
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.scss',
  standalone: true
})
export class AboutsectionComponent {

  @ViewChild("profile", { read: ElementRef}) profile!: ElementRef;
  @ViewChild("aboutMe", { read: ElementRef}) aboutMe!: ElementRef;

  private observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
      }
    });
  }, { threshold: 0.4 });

  ngAfterViewInit() {
    this.observer.observe(this.profile.nativeElement);
    this.observer.observe(this.aboutMe.nativeElement);
  }
}
