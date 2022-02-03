import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { LoginRegisterBandComponent } from './components/login-register-band/login-register-band.component';
import { SectionAComponent } from './components/section-a/section-a.component';
import { LogoNavbarComponent } from './components/logo-navbar/logo-navbar.component';
import { SectionBComponent } from './components/section-b/section-b.component';
import { CardsComponentComponent } from './components/cards-component/cards-component.component';
import { BlackSlideComponent } from './components/black-slide/black-slide.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LoginRegisterBandComponent,
    SectionAComponent,
    LogoNavbarComponent,
    SectionBComponent,
    CardsComponentComponent,
    BlackSlideComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
