import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'salledesport';
  constructor(public authService: AuthService,
    private router:Router)
  {}
  ngOnInit () {
    //let isloggedin: string;
   // let loggedUser:string;

    let isloggedin = localStorage.getItem('isloggedIn');
    let loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
    
    onLogout()
    {
      this.authService.logout();
    }

}
