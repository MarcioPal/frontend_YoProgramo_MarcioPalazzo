import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from 'app/model/experiencia.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: String = "https://backendmarcio.herokuapp.com/experiencias/";

  constructor(private http: HttpClient) {}

  public getExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"traer");
  }

  public save(experiencia: Experiencia):Observable<any>{
       return this.http.post<any>(this.url + "crear", experiencia);
  }

public update(exp: Experiencia):Observable<Experiencia>{
  return this.http.put<Experiencia>(`${this.url}editar/${exp.id}`,exp);

}

  public delete (id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}eliminar/${id}`);
  }
}
