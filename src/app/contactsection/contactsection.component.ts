import { Component, inject  } from '@angular/core';
import { ButtonComponent } from '../ui/buttons/button/button.component';
import { AbstractControl, FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

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
  submitted: boolean = false;
  
  mailTest = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  post = {
    endPoint: 'https://portfolio.alexander-putilin.de/sendMail.php',
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
            this.submitted = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      this.hasSubmitted = false;
      this.submitted = true;
      ngForm.resetForm();
    }
  }
}
