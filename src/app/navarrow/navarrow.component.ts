import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navarrow',
  imports: [],
  templateUrl: './navarrow.component.html',
  styleUrl: './navarrow.component.scss'
})
export class NavarrowComponent {
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
}
