import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewsection',
  imports: [],
  templateUrl: './reviewsection.component.html',
  styleUrl: './reviewsection.component.scss'
})
export class ReviewsectionComponent {
  reviews = [
    {
      name: "Aslihan E. - Join Project",
      review: "Description"
    },
    {
      name: "Janine W. - Join Project",
      review: "Description"
    },
    {
      name: "Michael Z. - Join Project",
      review: "Description"
    },
  ]
}
