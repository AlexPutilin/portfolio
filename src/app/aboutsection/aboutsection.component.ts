import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button.component';
import { NavarrowComponent } from '../ui/navarrow/navarrow.component';

@Component({
  selector: 'app-aboutsection',
  imports: [ButtonComponent, NavarrowComponent],
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.scss'
})
export class AboutsectionComponent {
  @Output() nextSection = new EventEmitter()
}
