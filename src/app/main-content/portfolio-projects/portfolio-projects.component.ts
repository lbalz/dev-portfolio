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
      projectImgPath: './assets/img/portfolio-projects/join.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      techStackString: ""
    },
    {
      projectName: 'El Pollo Loco',
      projectImgPath: './assets/img/portfolio-projects/el_pollo_loco.png',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      techStackString: ""
    },
    // {
    //   projectName: 'DABubble',
    //   projectImgPath: './assets/img/projects/da_bubble.png',
    //   techStack: ['Angular', 'TypeScript', 'Firebase']
    // }
  ];

  hoverArrowDNone: string = 'display: none';

  formatTechStackString(techStack: string[]): string {
    return techStack.join(`<span style="color: red;"> | </span>`);
  }



  // Translation Service
  isEnglish: boolean = true;

  constructor(private languageService: TranslateLanguageService) { 
    this.portfolioProjects[0].techStackString = this.portfolioProjects[0].techStack.join(`<span style="color: red;"> | </span>`);
    this.portfolioProjects[1].techStackString = this.portfolioProjects[1].techStack.join(`<span style="color: #3DCFB6;"> | </span>`);
  }

  translate = inject(TranslateLanguageService);

  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe(value => {
      this.isEnglish = value;
    })
  }
}
