import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    {
        path: '', 
        component: MainContentComponent,
        children: [
            {path: '', component: LandingPageComponent}
        ]
    },
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent}
];
