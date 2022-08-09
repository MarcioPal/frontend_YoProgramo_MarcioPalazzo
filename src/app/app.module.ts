import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillsComponent } from './componentes/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './home/home.component';
import { VistaEdicionEducacionComponent } from './componentes/educacion/vista-edicion-educacion/vista-edicion-educacion.component';
import { VistaEdicionExperienciaComponent } from './componentes/experiencia/vista-edicion-experiencia/vista-edicion-experiencia.component';
import { VistaEdicionSkillsComponent } from './componentes/hard-soft-skills/vista-edicion-skills/vista-edicion-skills.component';
import { VistaEdicionProyectosComponent } from './componentes/proyectos/vista-edicion-proyectos/vista-edicion-proyectos.component';
import { VistaEdicionComponent } from './componentes/vista-edicion/vista-edicion.component';
import { VistaEdicionAcercaDeComponent } from './componentes/acerca-de/vista-edicion-acerca-de/vista-edicion-acerca-de.component';
import { VistaEdicionBannerComponent } from './componentes/banner/vista-edicion-banner/vista-edicion-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    VistaEdicionEducacionComponent,
    VistaEdicionExperienciaComponent,
    VistaEdicionSkillsComponent,
    VistaEdicionProyectosComponent,
    VistaEdicionComponent,
    VistaEdicionAcercaDeComponent,
    VistaEdicionBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
