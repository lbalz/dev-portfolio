import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isEnglish: boolean = true;
  logoImgSrc: string = './assets/img/logo_filled.png';

  toggleLanguage(language: 'EN' | 'DE') {
    this.isEnglish = language === 'EN';
  }
}
