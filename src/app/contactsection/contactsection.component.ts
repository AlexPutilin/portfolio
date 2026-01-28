import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactsection',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './contactsection.component.html',
  styleUrl: './contactsection.component.scss',
  standalone: true
})
export class ContactsectionComponent {
  privacyAccepted: boolean = false;
  hasSubmitted: boolean = false;
  
  mailTest = true;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.hasSubmitted = true;
    if (ngForm.valid && ngForm.submitted && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      ngForm.resetForm();
      console.log(`Email submitted: Contact, ${this.contactData}`);
    }
  }


}
