import { Component } from '@angular/core';
import{salledesport} from '../model/salledesport.model'
import { SalledesportService } from '../services/salledesport.service';
import { typee } from '../model/type.model';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-add-salledesport',
  templateUrl: './add-salledesport.component.html',
  styleUrls: ['./add-salledesport.component.css']
})
export class AddSalledesportComponent {
  newsalledesport= new salledesport();
  types! : typee[];
  newIdCat!:number;
  newtype!: typee;
  constructor(private salledesportservice:SalledesportService,
    private router : Router)  {}
  ngOnInit() {
    this.types = this.salledesportservice.listetype();
    }
    
  addsalledesport(){
    console.log(this.newIdCat);
    this.newtype=this.salledesportservice.consultertype(this.newIdCat);
    this.newsalledesport.typee=this.newtype;
    this.salledesportservice.ajoutersalledesport(this.newsalledesport);
    this.router.navigate(['salledesport']);

    }
}
