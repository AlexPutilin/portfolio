import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HerosectionComponent } from '../herosection/herosection.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutsectionComponent } from '../aboutsection/aboutsection.component';

@Component({
  selector: 'app-mainpage',
  imports: [HerosectionComponent, NavbarComponent, AboutsectionComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  currentSection = 0;
  sections = ['hero', 'about', 'skills', 'contact'];
  private isScrolling = false;

  scrollNext() {
    const nextIndex = Math.min(this.currentSection + 1, this.sections.length - 1);
    this.scrollToSection(nextIndex);
  }

  scrollPrev() {
    const prevIndex = Math.max(this.currentSection - 1, 0);
    this.scrollToSection(prevIndex);
  }

  private scrollToSection(index: number) {
    if (!this.scrollContainer) return;
    const scrollBox = this.scrollContainer?.nativeElement;
    const width = scrollBox.clientWidth;
    scrollBox.scrollTo({ left: width * index, behavior: 'smooth' });
    this.currentSection = index;
    this.isScrolling = true;
    setTimeout(() => (this.isScrolling = false), 500);
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    if (this.isScrolling) return;
    if (event.deltaY > 0) {
      this.scrollNext();
    } else if (event.deltaY < 0) {
      this.scrollPrev();
    }
  }
}
