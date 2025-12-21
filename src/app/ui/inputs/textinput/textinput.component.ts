import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.scss'
})
export class InputsComponent {
  @Input() inputId: string = "id";
  @Input() placeholder: string = "placeholder";
}
