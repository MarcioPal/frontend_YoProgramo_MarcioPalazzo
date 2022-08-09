import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'app/model/LoginRequest';
import { AuthService } from 'app/service/auth.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLogged = false;
isLogginFail = false;
loginUsuario!:LoginRequest;
nombreUsuario!: string;
password!:string;
roles:string[]=[];
errMsj!:string;

  constructor(private tokenService: TokenService, private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin():void{
    this.loginUsuario = new LoginRequest(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(
data => {
  this.isLogged = true;
  this.isLogginFail = false;
  this.tokenService.setToken( data.accessToken);
  console.log(data.accessToken);
  this.tokenService.setUserName(data.username);
  this.tokenService.setAuthorities(data.roles);
  this.router.navigate(['/edicion']);
},err =>{
  this.isLogged = false;
  this.isLogginFail = true;
  this.errMsj = err.error.mensaje;
  console.log(this.errMsj);
}
    )
  }

}
