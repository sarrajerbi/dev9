import { salledesport } from './../../../salledesportcat/src/app/model/salledesport.model';
import { SalledesportService } from './../../../sarrasalledesport/src/app/services/salledesport.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  salledesport:salledesport[]=[];
  allsalledesport:salledesport[]=[];
  nomsalledesport!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.salledesport = this.SalledesportService.listesalledesport();
    this.allsalledesport=this.salledesport;
    }
  constructor(private SalledesportService:SalledesportService){}
  onChange() {
    this.salledesport = this.SalledesportService.rechercherParNom(this.searchTerm);
    console.log('Filtered Vetements:', this.salledesport);
  }
  onKeyUp(filterText : string){ this.salledesport = this.salledesport.filter(item => item.nomsalledesport.toLowerCase().includes(filterText)); }
  
}