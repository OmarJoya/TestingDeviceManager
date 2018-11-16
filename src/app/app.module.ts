import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { DevicesService } from './services/devices.service';

// Components
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DevicesComponent } from './components/devices/devices.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    DevicesComponent,
    ReportsComponent,
    SuggestionsComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DevicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
