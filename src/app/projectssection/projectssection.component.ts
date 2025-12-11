import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projectssection',
  imports: [NgClass],
  templateUrl: './projectssection.component.html',
  styleUrl: './projectssection.component.scss'
})
export class ProjectssectionComponent {
  hoverIndex: number | null = null;
}
