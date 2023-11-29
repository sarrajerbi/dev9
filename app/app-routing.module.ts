import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalledesportComponent } from './salledesport/salledesport.component';
import { AddSalledesportComponent } from './add-salledesport/add-salledesport.component';
import { UpdateSalledesportComponent } from './services/update-salledesport/update-salledesport.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SalledesportGuard } from './salledesport.guard';
import { RecherchePartypeComponent } from './recherche-partype/recherche-partype.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path: "salledesport", component : SalledesportComponent},
  {path: "add-salledesport", component : AddSalledesportComponent},
  { path: "", redirectTo: "salledesport", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: "updatesalledesport/:id", component:UpdateSalledesportComponent},
  {path : "add-salledesport", component : AddSalledesportComponent, canActivate:[SalledesportGuard]},
  {path: "recherchePartype", component : RecherchePartypeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'forbidden', component: ForbiddenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
