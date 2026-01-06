import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menuOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() open = new EventEmitter<void>();
}
