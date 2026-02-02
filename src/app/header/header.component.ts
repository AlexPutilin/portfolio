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
  isMobile = window.innerWidth < 820;
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
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  ngOnInit() {
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.isMobile = window.innerWidth < 820;

    if (!this.isMobile) {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  };
}
