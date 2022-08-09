import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from 'app/model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url: String = "https://backendmarcio.herokuapp.com/proyectos/";

  constructor(private http: HttpClient) { }

  public getProyectos():Observable<Proyecto[]>{
    return this.http.get< Proyecto[]>(this.url+"traer");
  }

  public save(proy: Proyecto):Observable<any>{
       return this.http.post<any>(this.url + "crear", proy);
  }

  public update(proy:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.url}editar/${proy.id}`, proy);
  }

  public delete (id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}borrar/${id}`);
  }
}

