import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projectssection',
  imports: [NgClass, ProjectoverviewComponent, TranslateModule],
  templateUrl: './projectssection.component.html',
  styleUrl: './projectssection.component.scss',
  standalone: true
})
export class ProjectssectionComponent {
  hoverIndex: number | null = null;
  projectIndex: number = 0;
  isModalOpen = false;

  openModal(index: number) {
    this.projectIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
