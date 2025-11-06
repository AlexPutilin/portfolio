import { Component, EventEmitter, Output } from '@angular/core';
import { NavarrowComponent } from '../navarrow/navarrow.component';
import { ButtonComponent } from '../ui/buttons/button.component';

@Component({
  selector: 'app-aboutsection',
  imports: [NavarrowComponent, ButtonComponent],
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.scss'
})
export class AboutsectionComponent {
  @Output() nextSection = new EventEmitter();
}
