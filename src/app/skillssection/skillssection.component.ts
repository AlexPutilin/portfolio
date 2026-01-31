import { afterNextRender, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { SkillboxComponent } from './skillbox/skillbox.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skillssection',
  imports: [SkillboxComponent, ButtonComponent, TranslateModule],
  templateUrl: './skillssection.component.html',
  styleUrl: './skillssection.component.scss',
  standalone: true
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
