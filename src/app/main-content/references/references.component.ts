import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  currentIndex = 0;
  references = [
    {
      name: 'app.references.team_partner.ben.name',
      reference: 'app.references.team_partner.ben.reference'
    },
    {
      name: 'app.references.team_partner.can.name',
      reference: 'app.references.team_partner.can.reference'
    },
    {
      name: 'app.references.team_partner.konstantin.name',
      reference: 'app.references.team_partner.konstantin.reference'
    }
  ];


  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }


  previousReference() {
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
  }


  getReferenceClass(index: number): string {
    const relativeIndex = (index - this.currentIndex + this.references.length) % this.references.length;
    if (relativeIndex === 0) return 'current';
    if (relativeIndex === 1) return 'next';
    if (relativeIndex === this.references.length - 1) return 'previous';
    return 'hidden';
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
