import { Component } from '@angular/core';
import { HerosectionComponent } from '../herosection/herosection.component';
import { AboutsectionComponent } from '../aboutsection/aboutsection.component';
import { SkillssectionComponent } from '../skillssection/skillssection.component';
import { ProjectssectionComponent } from '../projectssection/projectssection.component';
import { ReviewsectionComponent } from '../reviewsection/reviewsection.component';
import { ContactsectionComponent } from '../contactsection/contactsection.component';

@Component({
  selector: 'app-mainpage',
  imports: [HerosectionComponent, AboutsectionComponent, SkillssectionComponent, ProjectssectionComponent, ReviewsectionComponent, ContactsectionComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
  standalone: true
})
export class MainpageComponent {

}
