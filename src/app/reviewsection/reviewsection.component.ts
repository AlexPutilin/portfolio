import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviewsection',
  imports: [],
  templateUrl: './reviewsection.component.html',
  styleUrl: './reviewsection.component.scss'
})
export class ReviewsectionComponent {
  @ViewChild('diashow') diashow!: ElementRef<HTMLDivElement>;
  currentIndex: number = 0;
  transform = 'translateX(-0px)';

  reviews = [
    {
      name: "Aslihan E. - Join Project",
      review: "Working with Alex was a great experience — he was always willing to help and stayed highly motivated when challenges came up. His persistence in finding the right solution made a real difference for the whole team."
    },
    {
      name: "Janine W. - Join Project",
      review: "Alex has a talent for explaining complex topics in a simple and understandable way. This made it much easier to follow the project’s progress and move forward efficiently as a team."
    },
    {
      name: "Michael Z. - Join Project",
      review: "Alex consistently kept an overview of tasks and priorities, which brought clarity and structure to the project. Thanks to his organized approach, collaboration felt smooth and well-coordinated."
    },
  ]

  ngAfterViewInit() {
    this.updateTransform();
    window.addEventListener('resize', () => this.updateTransform());
  }

  updateTransform() {
    const container = this.diashow.nativeElement;
    const items = container.children as HTMLCollectionOf<HTMLElement>;
    if (!items.length) return;
    
    const gap = this.getGap(container);
    const itemWidth = items[this.currentIndex].offsetWidth;
    const offset = (itemWidth + gap) * this.currentIndex;
    container.style.paddingLeft = `${(container.offsetWidth / 2) - (itemWidth / 2)}px`
    this.transform = `translateX(-${offset}px)`; 
  }

  getGap(container: HTMLElement): number {
    const style = window.getComputedStyle(container);
    return parseFloat(style.columnGap || style.gap || '0');
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.updateTransform();
  }

  next() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
      this.updateTransform();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }
}
