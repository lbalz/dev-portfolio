import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLanguageService } from '../../translate-language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoImgSrc: string = './assets/img/logo_filled.png';
  logoMobileImgSrc: string = './assets/img/logo_filled_mobile.png';
  isEnglish: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor(private languageService: TranslateLanguageService) { }

  translate = inject(TranslateLanguageService);

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    this.languageService.changeIsEnglish(this.isEnglish);
  }

  toggleLanguageBtnStyle(language: 'EN' | 'DE') {
    this.isEnglish = language === 'EN';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log(this.isMobileMenuOpen);
  }
}
