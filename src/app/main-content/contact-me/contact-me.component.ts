import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  checkboxImg: string = './assets/icon/checkbox_default.png';
  checkboxClicked: boolean = false;


  checkboxMouseOver() {
    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked_hover.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default_hover.png';
    }
  }

  checkboxMouseLeave() {
    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default.png';
    }
  }

  toggleCheckbox() {
    this.checkboxClicked = !this.checkboxClicked;

    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked_hover.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default_hover.png';
    }
  }

  sendMail() {
    
  }


  // Translation Service
  isEnglish: boolean = true;

  constructor(private languageService: TranslateLanguageService) { }

  translate = inject(TranslateLanguageService);

  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe(value => {
      this.isEnglish = value;
    })
  }
}
