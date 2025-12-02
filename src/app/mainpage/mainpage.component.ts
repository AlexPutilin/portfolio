import { Component } from '@angular/core';
import { HerosectionComponent } from '../herosection/herosection.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { AboutsectionComponent } from '../aboutsection/aboutsection.component';
import { HeaderComponent } from '../header/header.component';
import { SkillssectionComponent } from '../skillssection/skillssection.component';

@Component({
  selector: 'app-mainpage',
  imports: [NavbarComponent, HeaderComponent, HerosectionComponent, AboutsectionComponent, SkillssectionComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  standalone: true
})
export class MainpageComponent {

}
