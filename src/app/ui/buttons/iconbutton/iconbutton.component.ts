import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iconbutton',
  imports: [],
  templateUrl: './iconbutton.component.html',
  styleUrl: './iconbutton.component.scss',
  standalone: true
})
export class IconbuttonComponent {
  @Input() href?: string;
  @Input() target: '_blank' | '_self' = '_self';
}
