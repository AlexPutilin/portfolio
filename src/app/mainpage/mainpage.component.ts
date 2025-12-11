import { Component } from '@angular/core';
import { HerosectionComponent } from '../herosection/herosection.component';
import { AboutsectionComponent } from '../aboutsection/aboutsection.component';
import { HeaderComponent } from '../header/header.component';
import { SkillssectionComponent } from '../skillssection/skillssection.component';
import { ProjectssectionComponent } from '../projectssection/projectssection.component';

@Component({
  selector: 'app-mainpage',
  imports: [HeaderComponent, HerosectionComponent, AboutsectionComponent, SkillssectionComponent, ProjectssectionComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  standalone: true
})
export class MainpageComponent {

}
