import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'app/model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   url: String = "https://backendmarcio.herokuapp.com/personas/";

  constructor(private http: HttpClient) { }

  public getPersonas():Observable<Persona>{
    return this.http.get<Persona>(this.url+"traer/1");
  }

  public update(pers:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.url}editar/${pers.id}`, pers); 
  }
}
