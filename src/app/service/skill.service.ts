import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from 'app/model/skills.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url: String = "https://backendmarcio.herokuapp.com/skills/";

  constructor(private http: HttpClient) { }

  public getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+"traer");
  }

  
  public save(skill: Skill):Observable<any>{
    return this.http.post<any>(this.url + "crear", skill);
}

public update(skill:Skill):Observable<Skill>{
 return this.http.put<Skill>(`${this.url}editar/${skill.id}`, skill);
}


public delete (id:number): Observable<any>{
 return this.http.delete<any>(`${this.url}borrar/${id}`);
}
}
