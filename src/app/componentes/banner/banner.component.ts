import { Component, OnInit } from '@angular/core';
import { Banner } from 'app/model/banner';
import { BannerService } from 'app/service/banner.service';
import { PersonaService } from 'app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
banner:Banner = new Banner("");
  constructor(public bannerService:BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe(data =>{this.banner=data});
    
  }
habilitarEdicion(idUrl:string, editar:boolean):void{
  if(editar==true){
  document.getElementById('editBanner')!.style.visibility = 'visible';
  document.getElementById('btnedicionBanner')!.style.visibility='visible';
  }else{
    document.getElementById('editBanner')!.style.visibility = 'hidden';
    document.getElementById('btnedicionBanner')!.style.visibility='hidden'
  }
}
editarBanner():void{
  const banner = document.getElementById('editBanner') as HTMLInputElement;
  if(banner.value != ""){
    this.banner.urlBanner = banner.value;
    this.bannerService.update(this.banner).subscribe();
    alert("El banner fue editado correctamente");
  }else{
    alert("Debe insertar la url del banner");
  }
}
}