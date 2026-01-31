import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reviewsection',
  imports: [TranslateModule],
  templateUrl: './reviewsection.component.html',
  styleUrl: './reviewsection.component.scss',
  standalone: true
})
export class ReviewsectionComponent {
  @ViewChild('diashow') diashow!: ElementRef<HTMLDivElement>;
  currentIndex: number = 0;
  transform = 'translateX(-0px)';

  reviews = [
    {
      name: "Aslihan E. - Join Project",
      review: 'REVIEW.REVIEW_1'
    },
    {
      name: "Janine W. - Join Project",
      review: 'REVIEW.REVIEW_2'
    },
    {
      name: "Michael Z. - Join Project",
      review: 'REVIEW.REVIEW_3'
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
