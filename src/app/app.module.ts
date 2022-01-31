import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { LoginRegisterBandComponent } from './components/login-register-band/login-register-band.component';
import { SectionAComponent } from './components/section-a/section-a.component';
import { LogoNavbarComponentComponent } from './components/logo-navbar-component/logo-navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LoginRegisterBandComponent,
    SectionAComponent,
    LogoNavbarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
