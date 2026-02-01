import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-contactsection',
  imports: [ButtonComponent, FormsModule, TranslateModule, RouterLink],
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
            this.hasSubmitted = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      this.hasSubmitted = false;
      console.log(`Email submitted: Contact`, this.contactData);
      ngForm.resetForm();
    }
  }

  debug(text: string) {
    console.log(text);
  }
}
