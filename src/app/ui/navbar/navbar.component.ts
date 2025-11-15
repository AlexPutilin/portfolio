import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() activeSectionIndex: number = 0;
  @Output() navigate = new EventEmitter();

  scrollToSection(index: number) {
    this.navigate.emit(index);
  }
}
