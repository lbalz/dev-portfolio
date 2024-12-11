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


  translate = inject(TranslateLanguageService);



  isEnglish: boolean = true;

  toggleLanguageBtnStyle(language: 'EN' | 'DE') {
    this.isEnglish = language === 'EN';
  }
}
