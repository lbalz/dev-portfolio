import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateLanguageService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
