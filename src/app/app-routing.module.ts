import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';
import { NuevaEduComponent } from './componentes/educacion/nueva-edu/nueva-edu.component';
import { EditarEduComponent } from './componentes/educacion/editar-edu/editar-edu.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill/nueva-skill.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill/editar-skill.component';
import { EditarPersonaComponent } from './componentes/persona/editar-persona/editar-persona.component';
import { AgregarpersonaComponent } from './componentes/persona/agregarpersona/agregarpersona.component';
import { GuardsGuard } from './servicios/guards.guard';

const routes: Routes = [

  {path:"porfolio", component:PorfolioComponent, },
  {path:"login", component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"nuevaexp",component:NewExperienciaComponent},
  {path:"editarexp/:id",component:EditarExpComponent},
  {path:"nuevaedu",component:NuevaEduComponent},
  {path:"editaredu/:id",component:EditarEduComponent},
  {path:"nuevaskill",component:NuevaSkillComponent},
  {path:"editarskill/:id",component:EditarSkillComponent},
  {path:"editarpersona/:id",component:EditarPersonaComponent},
  {path:"nuevaper",component:AgregarpersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
