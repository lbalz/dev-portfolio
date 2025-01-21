import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
  }


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}