import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'app/model/proyectos';
import { ProyectoService } from 'app/service/proyecto.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-vista-edicion-proyectos',
  templateUrl: './vista-edicion-proyectos.component.html',
  styleUrls: ['./vista-edicion-proyectos.component.css']
})
export class VistaEdicionProyectosComponent implements OnInit {

  proyectos: Proyecto[]=[];
  isLogged = false;
  
    constructor(public servProy: ProyectoService, private tokenService:TokenService) { }
  
    ngOnInit(): void {
      this.cargarProyectos();
      }
    
   
    cargarProyectos(): void{
      this.servProy.getProyectos().subscribe(data => {this.proyectos=data});
    }
  
    eliminarProyecto(id?: number): void{
      let confirmacion = confirm("¿Esta seguro que quiere eliminar este proyecto?");
      if((id != undefined) && (confirmacion==true)){
         this.servProy.delete(id).subscribe();
        alert("El proyecto fue eliminado satisfactoriamente");
        location.reload();
        }
       
    }
  
    habilitarEdicion(id:string, abrir:Boolean):void{
      let elemento=document.getElementById(id);
      if((id != undefined)  && (elemento != null)){
        if(abrir==true){
        elemento.style.display ='block';
      }else{elemento.style.display = 'none';}
      }
    }
  
    editarProyecto(proy: Proyecto, idNombre:string, idUrl: string, idAnio:string, idMes: string, idDia:string, idDesc: string):void{
       
      const nombreProy = document.getElementById(idNombre) as HTMLInputElement;
      const URL = document.getElementById(idUrl) as HTMLInputElement;
      const proyAnio = document.getElementById(idAnio) as HTMLInputElement;
      const proyMes = document.getElementById(idMes) as HTMLInputElement;
      const proyDia = document.getElementById(idDia) as HTMLInputElement;
      const descripcion = document.getElementById(idDesc) as HTMLInputElement;
      
      if((nombreProy.value != "") && (URL.value != "") && (proyAnio.value != "") && (proyMes.value != "") && (proyDia.value != "")){
      proy.nombreProy = nombreProy.value;
      proy.urlProy = URL.value;
      proy.proyAnio = parseInt(proyAnio.value,10);
      proy.proyMes = parseInt(proyMes.value,10);
      proy.proyDia = parseInt(proyDia.value,10);
      proy.descripcion = descripcion.value;
      console.log(proy.proyAnio);
      this.servProy.update(proy).subscribe();
      alert("El proyecto fue editado correctamente"); 
    }
    }
  
    agregarProyecto(): void{
  
      const nombreProy = document.getElementById('nombreProy') as HTMLInputElement;
      const URL = document.getElementById('urlImgProy') as HTMLInputElement;
      const proyAnio = document.getElementById('anioProy') as HTMLInputElement;
      const proyMes = document.getElementById('mesProy') as HTMLInputElement;
      const proyDia = document.getElementById('diaProy') as HTMLInputElement;
      const descripcion = document.getElementById('descripProy') as HTMLInputElement;
  
      if((nombreProy.value != "") && (URL.value != "") && (proyAnio.value != "") && (proyMes.value != "") && (proyDia.value != "")){
        const proy = new Proyecto(descripcion.value,nombreProy.value,URL.value,parseInt(proyAnio.value,10),parseInt(proyMes.value,10),parseInt(proyDia.value,10));
        
        this.servProy.save(proy).subscribe();
        alert("El proyecto fue agregado correctamente");
        location.reload();
      }else{
        alert("Debe completar los campos obligatorios");
      }
  
  
    }
  }
  
