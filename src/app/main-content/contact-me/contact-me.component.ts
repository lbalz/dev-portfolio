import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {




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
