import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, SkillSetComponent, FeaturedProjectsComponent, ReferencesComponent, ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
