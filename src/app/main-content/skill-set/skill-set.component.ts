import { Component, inject } from '@angular/core';
import { SkillIcon } from '../../shared/interfaces/skill-icon.interface';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  skillIcons: SkillIcon[] = [
    { text: 'HTML', path: './assets/icon/skills/html.png'},
    { text: 'CSS', path: './assets/icon/skills/css.png'},
    { text: 'JavaScript', path: './assets/icon/skills/js.png'},
    { text: 'TypeScript', path: './assets/icon/skills/ts.png'},
    { text: 'Angular', path: './assets/icon/skills/angular.png'},
    { text: 'Firebase', path: './assets/icon/skills/firebase.png'},
    { text: 'GIT', path: './assets/icon/skills/git.png'},
    { text: 'Rest-Api', path: './assets/icon/skills/rest-api.png'},
    { text: 'Scrum', path: './assets/icon/skills/scrum.png'},
  ];

  isEnglish: boolean = true;

  constructor(private languageService: TranslateLanguageService) { }

  translate = inject(TranslateLanguageService);

  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe(value => {
      this.isEnglish = value;
    })
  }
}