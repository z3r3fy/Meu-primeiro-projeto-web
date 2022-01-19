import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './registro/login/login.component';
import { ConsultaComponent } from './solicitacao/consulta/consulta.component';

const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'consulta', component: ConsultaComponent},
    {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
