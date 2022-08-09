import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from 'app/model/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  url: String = "https://backendmarcio.herokuapp.com/banner/";

  constructor(private http: HttpClient) { }
  
  public getBanner():Observable<Banner>{
    return this.http.get<Banner>(this.url+"traer/1");
  }


  public update(banner:Banner):Observable<Banner>{
    return this.http.put<Banner>(`${this.url}editar/${banner.id}`, banner);
  }

 
}
