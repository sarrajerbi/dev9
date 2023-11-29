import { Component } from '@angular/core';
import { SalledesportService } from '../salledesport.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { salledesport } from 'src/app/model/salledesport.model';
import { typee } from 'src/app/model/type.model';

@Component({
  selector: 'app-update-salledesport',
  templateUrl: './update-salledesport.component.html',
  styleUrls: ['./update-salledesport.component.css']
})
export class UpdateSalledesportComponent {
  currentsalledesport =new salledesport();
  types! : typee[];
  updatedtypId! : number;

  constructor(private activateRoute: ActivatedRoute,
    private router :Router,
    private salledesportService: SalledesportService) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.types = this.salledesportService.listetype();
      this.currentsalledesport = this.salledesportService.consultersalledesport(this.activateRoute.snapshot. params['id']);
      this.updatedtypId=this.currentsalledesport.typee.idtyp;

      } 
    updatesalledesport()
    {
      this.currentsalledesport.typee=this.salledesportService.consultertype(this.updatedtypId);
      this.salledesportService.updatesalledesport(this.currentsalledesport);
      this.router.navigate(['salledesport']);

    }
  }
      

