import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      
    }else{
      this.isLogged=false;
    }
  }
loguearse(){
this.router.navigate(['/login']);
}
onLogOut(){
  this.tokenService.logOut();
  this.isLogged= false;
 
  this.router.navigate(['']);
  
 
}

}