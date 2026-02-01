import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PolicyComponent } from './policy/policy.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'privacy-policy', component: PolicyComponent },
    { path: 'legal-notice', component: LegalnoticeComponent },
];
