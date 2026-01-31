import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  imports: [],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
  standalone: true
})
export class ProgressbarComponent {
  @Input() progress = 0;
}