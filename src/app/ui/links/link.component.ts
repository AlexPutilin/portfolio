import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() href?: string;
  @Input() target: '_self' | '_blank' = '_self';
}
