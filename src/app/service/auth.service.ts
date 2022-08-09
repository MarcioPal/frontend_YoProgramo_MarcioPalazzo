import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtResponse } from 'app/model/jwt-response';
import { LoginRequest } from 'app/model/LoginRequest';
import { SignupRequest } from 'app/model/SignupRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = 'https://backendmarcio.herokuapp.com/api/auth/'
  constructor(private httpClient: HttpClient) { }
  
  public nuevo(nuevoUsuario: SignupRequest):Observable<any>{
       return this.httpClient.post<any>(this.authURL + 'signup',nuevoUsuario);
  }

  public login(loginUsuario: LoginRequest):Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(this.authURL + 'signin',loginUsuario);
  }
}