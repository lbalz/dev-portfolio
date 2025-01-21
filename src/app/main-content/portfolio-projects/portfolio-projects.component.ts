import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioProject } from '../../shared/interfaces/portfolio-project.interface';
import { CommonModule, NgStyle } from '@angular/common';

interface TechStackItem {
  stack: string;
  imgPath: string;
}

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
    currentHoveredProject: string | null = null;
    selectedProject: PortfolioProject | null = null;
    showOverlay = false;
    closeOverlayBtn = './assets/icon/overlay/overlay_close_btn.png';
    nextProjectOverlayBtn = './assets/icon/overlay/overlay_next_btn.png';


    portfolioProjects: PortfolioProject[] = [
      {
        id: 1,
        projectName: 'Join',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        imageUrl: './assets/img/portfolio-projects/join_placeholder.jpg',
        githubUrl: 'https://github.com/lbalz/Join-Kanban-Board',
        liveTestUrl: '',
        infoTranslationKey: 'app.portfolio_projects.overlay.info.join_project'
      },
      {
        id: 2,
        projectName: 'El Pollo Loco',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: './assets/img/portfolio-projects/pollo_loco_placeholder.jpg',
        githubUrl: 'https://github.com/lbalz/El-Pollo-Loco',
        liveTestUrl: '',
        infoTranslationKey: 'app.portfolio_projects.overlay.info.game_project'
      }
    ];


    overlayProjectsTechStack: { [key: string]: TechStackItem[] } = {
        'Join': [
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
        ],
        'El Pollo Loco': [
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
      };


    onProjectHover(projectName: string | null): void {
      this.currentHoveredProject = projectName;
    }


    toggleOverlay(isVisible: boolean, project?: PortfolioProject): void {
      if(!isVisible) {
        this.showOverlay = false;
        this.selectedProject = null;
        return;
      }


      if(project) {
        this.selectedProject = project;
        this.showOverlay = true;
      }
    }

  
    getNextProject(): PortfolioProject {
      const currentIndex = this.portfolioProjects.findIndex(project => project.id === this.selectedProject?.id);
      const nextIndex = (currentIndex + 1) % this.portfolioProjects.length;
      return this.portfolioProjects[nextIndex];
    }
  

    onNextProject(): void {
      if (this.selectedProject) {
        this.selectedProject = this.getNextProject();
      }
    }


  // portfolioProjects: PortfolioProject[] = [
  //   {
  //     projectName: 'Join',
  //     projectImgPath: './assets/img/portfolio-projects/join_placeholder.png',
  //     techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
  //     techStackString: ""
  //   },
  //   {
  //     projectName: 'El Pollo Loco',
  //     projectImgPath: './assets/img/portfolio-projects/el_pollo_loco_placeholder.png',
  //     techStack: ['HTML', 'CSS', 'JavaScript'],
  //     techStackString: ""
  //   },
  //   // {
  //   //   projectName: 'DABubble',
  //   //   projectImgPath: './assets/img/projects/da_bubble.png',
  //   //   techStack: ['Angular', 'TypeScript', 'Firebase']
  //   // }
  // ];  

    





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
