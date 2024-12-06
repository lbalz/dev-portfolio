import { Component } from '@angular/core';
import { LandingPageIconSet } from '../shared/interfaces/landing-page-icon-set.interface';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  email: string = "lukasbalz.business@gmail.com";

  icons: LandingPageIconSet = {
    github: {
      normal: "./assets/icon/github_normal.png",
      hover: "./assets/icon/github_hover.png"
    },
    linkedin: {
      normal: "./assets/icon/linkedin_normal.png",
      hover: "./assets/icon/linkedin_hover.png"
    },
    email: {
      normal: "./assets/icon/mail_normal.png",
      hover: "./assets/icon/mail_hover.png"
    }
  };

  currentGithubIcon: string = this.icons.github.normal;
  currentLinkedinIcon: string = this.icons.linkedin.normal;
  currentEmailIcon: string = this.icons.email.normal;
}
