import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioProject } from '../../shared/interfaces/portfolio-project.interface';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [TranslateModule, NgStyle, CommonModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
  styles: [`
      .separator {
        color: #3DCFB6;
        margin: 0 4px;
      }
    `]
})
export class PortfolioProjectsComponent {
  portfolioProjects: PortfolioProject[] = [
    {
      projectName: 'Join',
      projectImgPath: './assets/img/portfolio-projects/join_placeholder.png',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      techStackString: ""
    },
    {
      projectName: 'El Pollo Loco',
      projectImgPath: './assets/img/portfolio-projects/el_pollo_loco_placeholder.png',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      techStackString: ""
    },
    // {
    //   projectName: 'DABubble',
    //   projectImgPath: './assets/img/projects/da_bubble.png',
    //   techStack: ['Angular', 'TypeScript', 'Firebase']
    // }
  ];

  overlayProjectsTechStack = [
    {
      join: [
        {
          stack: 'HTML',
          imgPath: './assets/icon/overlay/skills/overlay_html.png'
        },
        {
          stack: 'CSS',
          imgPath: './assets/icon/overlay/skills/overlay_css.png'
        },
        {
          stack: 'JavaScript',
          imgPath: './assets/icon/overlay/skills/overlay_js.png'
        },
        {
          stack: 'Firebase',
          imgPath: './assets/icon/overlay/skills/overlay_firebase.png'
        },
      ]
    },
    {
      pollo_loco: [
        {
          stack: 'HTML',
          imgPath: './assets/icon/overlay/skills/overlay_html.png'
        },
        {
          stack: 'CSS',
          imgPath: './assets/icon/overlay/skills/overlay_css.png'
        },
        {
          stack: 'JavaScript',
          imgPath: './assets/icon/overlay/skills/overlay_js.png'
        },
      ]
    }
  ];


    currentHoveredProject: string | null = null;
    showOverlay: boolean = false;
    closeOverlayBtn: string = './assets/icon/overlay/overlay_close_btn.png';
    nextProjectOverlayBtn: string = './assets/icon/overlay/overlay_next_btn.png';

    onProjectHover(projectName: string | null) {
      this.currentHoveredProject = projectName;
    }

    toggleOverlay(isVisible: boolean) {
      this.showOverlay = isVisible;
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
