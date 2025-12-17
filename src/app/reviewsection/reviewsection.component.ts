import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-reviewsection',
  imports: [NgClass],
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
