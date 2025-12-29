import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { LinkComponent } from '../ui/links/link.component';


@Component({
  selector: 'app-footer',
  imports: [LogoComponent, LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
