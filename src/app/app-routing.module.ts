import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';

const routes: Routes = [

  {path:"porfolio", component:PorfolioComponent},
  {path:"login", component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"nuevaexp",component:NewExperienciaComponent},
  {path:"editarexp , experiencia.id",component:EditarExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
