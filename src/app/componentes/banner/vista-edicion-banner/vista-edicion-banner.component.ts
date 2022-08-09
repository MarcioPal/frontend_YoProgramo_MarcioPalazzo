import { Component, OnInit } from '@angular/core';
import { Banner } from 'app/model/banner';
import { BannerService } from 'app/service/banner.service';

@Component({
  selector: 'app-vista-edicion-banner',
  templateUrl: './vista-edicion-banner.component.html',
  styleUrls: ['./vista-edicion-banner.component.css']
})
export class VistaEdicionBannerComponent implements OnInit {
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
