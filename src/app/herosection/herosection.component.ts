import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../ui/buttons/button.component';


@Component({
  selector: 'app-herosection',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  @Output() nextSection = new EventEmitter();
}
