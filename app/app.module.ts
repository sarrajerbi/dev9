import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalledesportComponent } from './salledesport/salledesport.component';
import { AddSalledesportComponent } from './add-salledesport/add-salledesport.component';
import { FormsModule } from '@angular/forms';
import { UpdateSalledesportComponent } from './services/update-salledesport/update-salledesport.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RecherchePartypeComponent } from './recherche-partype/recherche-partype.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SalledesportComponent,
    AddSalledesportComponent,
    UpdateSalledesportComponent,
    LoginComponent,
    ForbiddenComponent,
    RecherchePartypeComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
