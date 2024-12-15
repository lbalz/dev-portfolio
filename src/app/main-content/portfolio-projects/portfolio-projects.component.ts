import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {

  isEnglish: boolean = true;

  constructor(private languageService: TranslateLanguageService) { }

  translate = inject(TranslateLanguageService);

  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe(value => {
      this.isEnglish = value;
    })
  }
}
