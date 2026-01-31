import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { MenuComponent } from '../ui/menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language-service/language-service.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, MenuComponent, TranslateModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  menuOpen = false;
  language: 'de' | 'en';

  constructor(private langService: LanguageService) {
    this.language = this.langService.getLanguage() as 'de' | 'en';
  }

  setLanguage(lang: 'de' | 'en') {
    this.language = lang;
    this.langService.setLanguage(lang as 'de' | 'en');
  }

  onLanguageChange(lang: 'de' | 'en') {
    this.langService.setLanguage(lang);
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
