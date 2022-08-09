import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'app/model/experiencia.model';
import { ExperienciaService } from 'app/service/experiencia.service';

@Component({
  selector: 'app-vista-edicion-experiencia',
  templateUrl: './vista-edicion-experiencia.component.html',
  styleUrls: ['./vista-edicion-experiencia.component.css']
})
export class VistaEdicionExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void{
    this.experienciaService.getExperiencias().subscribe(data => {this.experiencias=data})
  }

  borrarExperiencia(id?: number): void{
    let confirmacion = confirm("¿Esta seguro que quiere eliminar esta experiencia laboral?");
    if ((id != undefined) && (confirmacion==true)){
    this.experienciaService.delete(id).subscribe();
    alert("La experiencia laboral fue eliminada satisfactoriamente");
    location.reload();
    }
  }

  habilitarEdicion(id:string, abrir:Boolean):void{
    let elemento;
    elemento=document.getElementById(id);
    if((id != undefined)  && (elemento != null)){
      if(abrir==true){
      elemento.style.display ='block';
    }else{elemento.style.display = 'none';}
    }
  }

  editarExperiencia(exp: Experiencia,idPuesto:string, idEmp: string, idURL: string,idAnioInicio: string, idAnioFin: string, idDescip: string): void{

     const puesto = document.getElementById(idPuesto) as HTMLInputElement;
     const empresa= document.getElementById(idEmp) as HTMLInputElement ;
     const URL = document.getElementById(idURL) as HTMLInputElement ;
     const anioInicio= document.getElementById(idAnioInicio) as HTMLInputElement;
     const anioFin= document.getElementById(idAnioFin) as HTMLInputElement;
     const descripcion = document.getElementById(idDescip)  as HTMLInputElement;

     if((puesto.value != "") && (empresa.value != "")  && (anioInicio.value != "") && (anioFin.value != "") && (parseInt(anioInicio.value,10)<(parseInt(anioFin.value,10)))){
      exp.puesto=puesto.value;
      exp.nombreEmpresa=empresa.value;
      exp.urlImg=URL.value;
      exp.anioInicio=parseInt(anioInicio.value,10);
      exp.anioFin=parseInt(anioFin.value,10);
      exp.descripcion=descripcion.value;
      this.experienciaService.update(exp).subscribe();
      alert("La experiencia laboral fue editada exitosamente");
     }else{
          if(parseInt(anioInicio.value,10)> parseInt(anioFin.value,10)){
            alert("ERROR: El año de finalizacion debe ser mayor que el año de comienzo");
          }else{
              alert("Debe completar los campos obligatorios");
            }
     }
 }
  crearExperiencia():void{
   

    const puesto = document.getElementById('puesto') as HTMLInputElement;
    const empresa= document.getElementById('nombreEmp') as HTMLInputElement ;
    const URL = document.getElementById('urlImg') as HTMLInputElement;
    const anioInicio= document.getElementById('añoinicio') as HTMLInputElement;
    const anioFin= document.getElementById('añoFin') as HTMLInputElement;
    const descripcion = document.getElementById('descripcion')  as HTMLInputElement;

    if((puesto.value != "") && (empresa.value != "")  && (anioInicio.value != "") && (anioFin.value != "")){

       const ex = new Experiencia(parseInt(anioInicio.value,10),parseInt(anioFin.value,10),puesto.value,empresa.value,descripcion.value,URL.value);
        this.experienciaService.save(ex).subscribe();
        alert("La experiencia fue añadida correctamente");
        location.reload();
    } else{
    alert("Debe completar los campos obligatorios");
    }
    
  }
}