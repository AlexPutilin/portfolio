import { Component, EventEmitter, Output } from '@angular/core';
import { SocialsmenuComponent } from '../socialsmenu/socialsmenu.component';
import { NavarrowComponent } from '../navarrow/navarrow.component';

@Component({
  selector: 'app-herosection',
  imports: [SocialsmenuComponent, NavarrowComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  @Output() nextSection = new EventEmitter();
}
