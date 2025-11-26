import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navarrow',
  imports: [CommonModule],
  templateUrl: './navarrow.component.html',
  styleUrl: './navarrow.component.scss'
})
export class NavarrowComponent {
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Input() posTop = '';
}
