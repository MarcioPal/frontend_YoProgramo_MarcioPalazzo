import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-vista-edicion',
  templateUrl: './vista-edicion.component.html',
  styleUrls: ['./vista-edicion.component.css']
})
export class VistaEdicionComponent implements OnInit {
isLogged= false;
  constructor(private tokenService:TokenService,private router:Router) { }
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){

    }else{
      this.router.navigate(['/login']);
    }
  }

}
