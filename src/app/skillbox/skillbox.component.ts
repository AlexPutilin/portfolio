import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-skillbox',
  imports: [NgOptimizedImage],
  templateUrl: './skillbox.component.html',
  styleUrl: './skillbox.component.scss'
})
export class SkillboxComponent {
  @Input() skillName: string = "";

  imgPath: string = `/icons/${this.skillName}.svg`
}
