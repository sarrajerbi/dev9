import { typee } from './../model/type.model';
import { salledesport } from './../model/salledesport.model';
import { Component } from '@angular/core';
import { SalledesportService } from '../services/salledesport.service';

@Component({
  selector: 'app-recherche-partype',
  templateUrl: './recherche-partype.component.html',
  styleUrls: ['./recherche-partype.component.css']
})
export class RecherchePartypeComponent {
salledesport:salledesport[]=[];
Idtyp!:number;
Type:typee[]=[];
ngOnInit(): void {
  this.Type = this.SalledesportService.listetype();
  }
constructor(private SalledesportService:SalledesportService){}
onChange() {
  console.log('Selected Type ID:', this.Idtyp);

  // Call the service to filter vetements based on the selected Type
  this.salledesport = this.SalledesportService.rechercherPartype(this.Idtyp);

  // Debugging statement
  console.log('Filtered salledesport:', this.salledesport);
}
}