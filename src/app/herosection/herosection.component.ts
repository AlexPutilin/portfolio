import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { CarouselComponent } from '../ui/carousel/carousel.component';
import { IconbuttonComponent } from '../ui/buttons/iconbutton/iconbutton.component';


@Component({
  selector: 'app-herosection',
  imports: [ButtonComponent, IconbuttonComponent, CommonModule, CarouselComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
}
