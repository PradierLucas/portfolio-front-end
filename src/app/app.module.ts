import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';

import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { EditarPersonaComponent } from './componentes/persona/editar-persona/editar-persona.component';
import { EditarEduComponent } from './componentes/educacion/editar-edu/editar-edu.component';
import { NuevaEduComponent } from './componentes/educacion/nueva-edu/nueva-edu.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill/editar-skill.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill/nueva-skill.component';
import { AgregarpersonaComponent } from './componentes/persona/agregarpersona/agregarpersona.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,

    ExperienciaComponent,
    SkillsComponent,
    
    LoginComponent,
    PorfolioComponent,
    FooterComponent,
    EducacionComponent,
    NewExperienciaComponent,
    EditarExpComponent,
    PersonaComponent,
    EditarPersonaComponent,
    EditarEduComponent,
    NuevaEduComponent,
    EditarSkillComponent,
    NuevaSkillComponent,
    AgregarpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
