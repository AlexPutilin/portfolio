import { Component } from '@angular/core';
import { InputsComponent } from '../ui/inputs/textinput/textinput.component';
import { ButtonComponent } from '../ui/buttons/button.component';
import { CheckboxComponent } from '../ui/inputs/checkbox/checkbox.component';

@Component({
  selector: 'app-contactsection',
  imports: [InputsComponent, ButtonComponent, CheckboxComponent],
  templateUrl: './contactsection.component.html',
  styleUrl: './contactsection.component.scss'
})
export class ContactsectionComponent {
  formIsValid: boolean = false;
}
