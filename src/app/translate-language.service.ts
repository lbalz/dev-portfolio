import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

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

  private isEnglishSubject = new BehaviorSubject<boolean>(true);
  isEnglish$ = this.isEnglishSubject.asObservable();

  changeIsEnglish(value: boolean): void {
    this.isEnglishSubject.next(value);
  }

  getIsEnglishState(): boolean {
    return this.isEnglishSubject.value;
  }
}
