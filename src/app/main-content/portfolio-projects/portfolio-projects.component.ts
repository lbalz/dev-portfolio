import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioProject } from '../../shared/interfaces/portfolio-project.interface';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  portfolioProjects: PortfolioProject[] = [
    {
      projectName: 'Join',
      projectImgPath: './assets/img/projects/join.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase']
    },
    {
      projectName: 'El Pollo Loco',
      projectImgPath: './assets/img/projects/el_pollo_loco.png',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    // {
    //   projectName: 'DABubble',
    //   projectImgPath: './assets/img/projects/da_bubble.png',
    //   techStack: ['Angular', 'TypeScript', 'Firebase']
    // }
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
