import { Component, EventEmitter, Output } from '@angular/core';
import { NavarrowComponent } from '../ui/navarrow/navarrow.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-herosection',
  imports: [NavarrowComponent, CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  @Output() nextSection = new EventEmitter();
}
