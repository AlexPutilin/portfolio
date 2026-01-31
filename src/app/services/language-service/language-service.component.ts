import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang: 'de' | 'en';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') as 'de' | 'en' | null;
    this.currentLang = savedLang ?? 'en';
    this.translate.use(this.currentLang);
  }

  setLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  getLanguage(): 'de' | 'en' {
    return this.currentLang;
  }
}
