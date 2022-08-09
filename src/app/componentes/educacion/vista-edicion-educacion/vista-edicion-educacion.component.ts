import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Educacion } from 'app/model/educacion.model';
import { EducacionService } from 'app/service/educacion.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-vista-edicion-educacion',
  templateUrl: './vista-edicion-educacion.component.html',
  styleUrls: ['./vista-edicion-educacion.component.css']
})
export class VistaEdicionEducacionComponent implements OnInit {

  listaEducacion: Educacion[]=[];
  isLogged = false;

 constructor(public servEduc: EducacionService, private tokenService:TokenService) { }

 ngOnInit(): void {
   this.cargarEducacion();
}

cargarEducacion():void{
 this.servEduc.getAllEducacion().subscribe(data => {this.listaEducacion=data});
}
borrarEducacion(id?: number):void{
 let confirmacion = confirm("¿Esta seguro que quiere eliminar este item Educacion?");
 if((id != undefined) && (confirmacion==true)){
 this.servEduc.delete(id).subscribe();
 alert("El item educacion fue eliminado satisfactoriamente");
 location.reload();
}
}

habilitarEdicion(id:string, abrir: Boolean):void{
 let elemento;
 elemento=document.getElementById(id);
 if((id != undefined)  && (elemento != null)){
   if(abrir==true){
   elemento=document.getElementById(id)!.style.display ='block';
 }else{elemento=document.getElementById(id)!.style.display ='none';}
 }
}

editarEducacion(educ: Educacion, idTitulo: string,idIns: string, idUrl: string, idInicio:string, idFin: string, idDesc:string,idDiploma: string):void{

 const titulo = document.getElementById(idTitulo) as HTMLInputElement;
 const institucion = document.getElementById(idIns)  as HTMLInputElement;
 const URL = document.getElementById(idUrl) as HTMLInputElement;
 const anioInicio = document.getElementById(idInicio)  as HTMLInputElement;
 const anioFin = document.getElementById(idFin)  as HTMLInputElement;
 const descripcion = document.getElementById(idDesc)  as HTMLInputElement;
 const diploma = document.getElementById(idDiploma)as HTMLInputElement;

 if((titulo.value != "" )&& (institucion.value != "" )&& (anioInicio.value != "") && (anioFin.value!="") && ((parseInt(anioInicio.value,10)) < (parseInt(anioFin.value,10)))){
   
 educ.titulo = titulo.value;
 educ.institucion = institucion.value;
 educ.urlImg = URL.value;
 educ.anioInicio = parseInt(anioInicio.value,10);
 educ.anioFin = parseInt(anioFin.value,10);
 educ.descripcion = descripcion.value;
 educ.urlDiploma = diploma.value;
 
 this.servEduc.update(educ).subscribe();
 alert("El item educacion fue editado exitosamente");

}else{
     if (parseInt(anioInicio.value,10) > parseInt(anioFin.value,10)){
       alert("Error: El año de finalizacion debe ser mayor que el año de inicio");
     }
      else{
         alert("Debe completar todos los campos obligatorios");
 }
}
}

agregarEducacion():void{

 const titulo = document.getElementById("titulo")as HTMLInputElement;
 const instituto = document.getElementById("inst")as HTMLInputElement;
 const logo = document.getElementById("logoedu")as HTMLInputElement;
 const anioInicio = document.getElementById("inicioEduc")as HTMLInputElement;
 const anioFin = document.getElementById("finEduc")as HTMLInputElement;
 const desc = document.getElementById("descripEduc")as HTMLInputElement;
 const diploma = document.getElementById("urlDiploma")as HTMLInputElement;

 if((titulo.value != "" )&& (instituto.value != "" )&& (anioInicio.value != "") && (anioFin.value!="") && ((parseInt(anioInicio.value,10)) < (parseInt(anioFin.value,10)))){

 const educ=new Educacion(parseInt(anioInicio.value,10),parseInt(anioFin.value,10),titulo.value,instituto.value,desc.value,logo.value, diploma.value);

 this.servEduc.save(educ).subscribe();

 alert("El item educacion fue agregado correctamente");
  location.reload();
 }else{
       if (parseInt(anioInicio.value,10) > parseInt(anioFin.value,10)){
         alert("Error: El año de finalizacion debe ser mayor que el año de inicio");
       }
         else{
           alert("Debe completar los campos obligatorios");
         }
 }
}

}

