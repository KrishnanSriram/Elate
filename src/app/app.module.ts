import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BdNavbarComponent } from './components/bd-navbar/bd-navbar.component';
import { BdJumbotronComponent } from './components/bd-jumbotron/bd-jumbotron.component';
import { BdHomeComponent } from './components/bd-home/bd-home.component';
import { BdWorkComponent } from './components/bd-work/bd-work.component';
import { BdTestimonialsComponent } from './components/bd-testimonials/bd-testimonials.component';
import { BdAboutComponent } from './components/bd-about/bd-about.component';
import { BdContactComponent } from './components/bd-contact/bd-contact.component';
import { BdServicesComponent } from './components/bd-services/bd-services.component';
import { BdFooterComponent } from './components/bd-footer/bd-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BdNavbarComponent,
    BdJumbotronComponent,
    BdHomeComponent,
    BdWorkComponent,
    BdTestimonialsComponent,
    BdWorkComponent,
    BdAboutComponent,
    BdContactComponent,
    BdServicesComponent,
    BdFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
