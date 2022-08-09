import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from 'app/model/educacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url: String = "https://backendmarcio.herokuapp.com/educacion/";

  constructor(private http: HttpClient) { }
  
  public getAllEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+"traer");
  }

  public save(educacion: Educacion):Observable<any>{
       return this.http.post<any>(this.url + "crear", educacion);
  }

  public update(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.url}editar/${educacion.id}`, educacion);
  }

  public delete (id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}eliminar/${id}`);
  }
}
