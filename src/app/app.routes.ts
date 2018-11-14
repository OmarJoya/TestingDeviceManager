import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

const APP_ROUTES: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '**', pathMatch:'full', redirectTo:'devices' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
