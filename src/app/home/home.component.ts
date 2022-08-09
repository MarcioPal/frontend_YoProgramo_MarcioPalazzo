import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.router.navigate(['/edicion']);
    }
  }

}
