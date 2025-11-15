import { Component } from '@angular/core';
import { SkillboxComponent } from '../skillbox/skillbox.component';

@Component({
  selector: 'app-skillssection',
  imports: [SkillboxComponent],
  templateUrl: './skillssection.component.html',
  styleUrl: './skillssection.component.scss'
})
export class SkillssectionComponent {
  skillList = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Rest-API',
    'Firebase',
    'GIT',
    'NodeJS',
    'SCRUM',
    'Material-Design',
  ]
}
