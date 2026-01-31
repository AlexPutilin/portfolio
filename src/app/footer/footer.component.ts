import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { LinkComponent } from '../ui/links/link.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  imports: [LogoComponent, LinkComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {

}
